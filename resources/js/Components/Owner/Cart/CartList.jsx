import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { formatCurr } from "@/Utils/FormatPrice";
import ButtonLink from "@/Components/ButtonLink";
import { Link } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

const CartItem = ({ cart, handleQuantityChange, quantity, handleDelete, alamat }) => {
    // console.log(cart)
    const clientKey = import.meta.env.MIDTRANS_CLIENT_API_KEY
    return (
       <>
         <div
            key={cart.id}
            className="mb-3 bg-white border-[1.5px] border-secondary-color p-4 flex justify-between items-center"
        >
            <div className="flex items-center gap-4">
                <img src={cart.product.image_product} alt={cart.product.name_product} className="w-16 h-16 object-cover rounded" />
                <div>
                    <p className="text-gray-800 text-sm font-semibold">
                        {cart.product.name_product}
                    </p>
                    <p className="text-gray-800 text-sm font-semibold">
                        {formatCurr(cart.price)}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleQuantityChange(cart.id, -1)}
                >
                    -
                </button>
                <span>{quantity}</span>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleQuantityChange(cart.id, 1)}
                >
                    +
                </button>
            </div>
        </div>
       </>
    );
};

const CartList = ({ cart }) => {
    const [quantities, setQuantities] = useState([]);
    useEffect(() => {
        if (cart && cart.length > 0) {
            const initialQuantities = cart.map(item => ({ id: item.id, quantity: item.qty}));
            setQuantities(initialQuantities);
        }
    }, [cart]);

    const [subtotal, setSubtotal] = useState(0);
    const [subPPN, setPPN] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [cartToDelete, setCartToDelete] = useState(null);
    const [provinces, setProvinces] = useState([]);
    const [kota, setKota] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedKota, setSelectedKota] = useState('');
    const [citiesInProvince, setCitiesInProvince] = useState([]);
    const [selectedCourier, setSelectedCourier] = useState('');
    const [destinationId, setDestinationId] = useState(null);
    const [ongkir, setOngkir] = useState(null);
    const [selectedShipping, setSelectedShipping] = useState(null);

    useEffect(() => {
        const newSubtotal = quantities.reduce((acc, curr) => {
            const item = cart.find(c => c.id === curr.id);
            return acc + (item.price_tax * curr.quantity);
        }, 0);
        const newSubtotalPPN = quantities.reduce((acc, curr) => {
            const item = cart.find(c => c.id === curr.id);
            return acc + (item.price * curr.quantity);
        }, 0);
        const newPPN = 0.11 * newSubtotalPPN;
        setPPN(newPPN);
        setSubtotal(newSubtotal);
    }, [quantities, cart]);

    const handleQuantityChange = (id, jumlah) => {
        const updatedQuantities = quantities.map(q =>
            q.id === id ? { ...q, quantity: Math.max(0, q.quantity + jumlah) } : q
        );
        setQuantities(updatedQuantities);
        const updatedItem = updatedQuantities.find(q => q.id === id);
        if (updatedItem.quantity === 0) {
            setShowPopup(true);
            setCartToDelete(id);
        }
        Inertia.put(route('owner.cart.updateqty', { cart: id }), {
            qty: updatedItem.quantity
        });
    };

    const handleDelete = (id) => {
        Inertia.delete(route('owner.cart.delete', { cart: id }), {
            onSuccess: () => {
                setQuantities(quantities.filter(q => q.id !== id));
                setShowPopup(false);
                setCartToDelete(null);
            },
        });
    };

    const handleSubmit = async (e) => {
        // alert('oke');
        e.preventDefault();

        // Inertia.post(route('invoice'), {
        //     cart: cart,
        //     subtotal: subtotal,
        // });
        try {
            const response = await axios.post(route('invoice'), {
                cart: cart,
                subtotal: subtotal,
                // ongkos: onkir,
            });
            // console.log(response.data);
            if (response && response.data && response.data.token) {
                let snapToken = response.data.token;
                // console.log(snapToken);
                window.snap.pay(snapToken);
            }
        } catch (error) {
            console.error("Error during transaction request:", error);
        }
    }

    useEffect(() => {
        const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
        const myMidtransClientKey = import.meta.env.MIDTRANS_CLIENT_API_KEY;
      
        const script = document.createElement('script');
        script.src = snapSrcUrl;
        script.setAttribute('data-client-key', myMidtransClientKey);
        script.async = true;
      
        document.body.appendChild(script);
    
      }, []);

    // useEffect(() => {
    //     const script = document.createElement('script');
      
    //     script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    //     script.setAttribute('data-client-key', 'SB-Mid-client-YkS7IwWkB0WXsgrO');
    //     document.body.appendChild(script);
    //   }, []);


    if (!cart || cart.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h2 className="text-2xl font-semibold">Tidak Ada Product</h2>
            </div>
        );
    }

    // useEffect(() => {
    //     const getprovinsi = async () => {
    //         try {
    //             const provinsiresponse = await axios.get('provinces');
    //             // console.log(response);
    //             setProvinces(provinsiresponse.data.rajaongkir.results)

    //             const kotaresponse = await axios.get('cities');
    //             // console.log(kotaresponse);
    //             setKota(kotaresponse.data.rajaongkir.results)
    //         } catch (error) {
    //             console.error('Error fetching provinces:', error);
    //         }
    //     };
    //     getprovinsi();
    // }, []);

    // const handleProvinceChange = (e) => {
    //     const selectedProvince = e.target.value;
    //     setSelectedProvince(selectedProvince);
    //     const citiesInSelectedProvince = kota.filter(city => city.province_id === selectedProvince);
    //     setCitiesInProvince(citiesInSelectedProvince);
    //     setSelectedKota('');
    // }

    // const handleCityChange = (e) => {
    //     const selectedKota = e.target.value;
    //     setSelectedKota(selectedKota);
    //     const city = kota.find(city => city.city_id === selectedKota);
    //     if (city) {
    //         setDestinationId(city.city_id);
    //     }
    // }

    // const handleCourierChange = async (e) => {
    //     const selectedCourier = e.target.value;
    //     setSelectedCourier(selectedCourier);

    //     // if (selectedCourier && destinationId) {
    //     //     Inertia.post(route('onkir'), {
    //     //         origin: '501',
    //     //         destination: destinationId,
    //     //         weight: 1700,
    //     //         courier: selectedCourier
    //     //     }, {
    //     //         onSuccess: ({ props }) => {
    //     //             const ongkirData = props.response;
    //     //             setOngkir(ongkirData.rajaongkir.results[0].costs[0].cost[0].value);
    //     //             },
    //     //             onError: (error) => {
    //     //                 console.error("Error fetching ongkir:", error);
    //     //             }
    //     //         });
    //     //     } else {
    //     //         setOngkir(null);
    //     //     }
    //     // };

    //     if (selectedCourier && destinationId) {
    //         try {
    //             const response = await axios.post(route('onkir'), {
    //                 origin: '501',
    //                 destination: destinationId,
    //                 weight: 1700,
    //                 courier: selectedCourier
    //             });
    //             const ongkirData = response.data.rajaongkir.results[0].costs;
    //             // console.log(ongkirData);
    //             setOngkir(ongkirData);
    //         } catch (error) {
    //             console.error("Error fetching ongkir:", error);
    //         }
    //         } else {
    //             setOngkir(null);
    //         }
    //     };

    // const handleShippingSelect = (shippingCost) => {
    //     setSelectedShipping(shippingCost);
    // };

    // const total = subtotal + (selectedShipping ? selectedShipping.cost[0].value : 0);
    // const onkir = selectedShipping ? selectedShipping.cost[0].value : 0;

    return (
        <div>
            {cart.length > 0 && cart.map(carts => {
                const quantity = quantities.find(q => q.id === carts.id)?.quantity || 1;
                return (
                    <CartItem
                        key={carts.id}
                        cart={carts}
                        handleQuantityChange={handleQuantityChange}
                        quantity={quantity}
                        handleDelete={handleDelete}
                    />
                );
            })}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bagian Alamat */}
                {/* <div className="bg-white border border-secondary-color p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-4">Alamat Pengiriman</h2>
                    <p className="mb-4">{cart[0].user.alamat}</p>
                    {/* Pilihan Provinsi
                    <div className="mb-4">
                        <InputLabel htmlFor="province" value="Pilih Provinsi" />
                        <select
                            id="province"
                            className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
                            onChange={handleProvinceChange}
                            value={selectedProvince}
                        >
                            <option value="">Pilih Provinsi</option>
                            {provinces.map(province => (
                                <option key={province.province_id} value={province.province_id}>
                                    {province.province}
                                </option>
                            ))}
                        </select>
                    </div>
                    Pilihan Kota
                    {selectedProvince && (
                        <div className="mb-4">
                            <InputLabel htmlFor="city" value="Pilih Kota" />
                            <select
                                id="city"
                                className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
                                onChange={handleCityChange}
                                value={selectedKota}
                            >
                                <option value="">Pilih Kota</option>
                                {citiesInProvince.map(city => (
                                    <option key={city.city_id} value={city.city_id}>
                                        {city.city_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    Pilihan Ekspedisi
                    {selectedKota && (
                        <div className="mb-4">
                            <InputLabel htmlFor="courier" value="Pilih Ekspedisi" />
                            <select
                                id="courier"
                                className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
                                onChange={handleCourierChange}
                                value={selectedCourier}
                            >
                                <option value="">Pilih Ekspedisi</option>
                                <option value="jne">JNE</option>
                                <option value="pos">POS</option>
                                <option value="tiki">TIKI</option>
                            </select>
                            {/* Daftar Ongkir *
                            {ongkir && (
                                <div className="mt-4 space-y-4">
                                    {ongkir.map(result => (
                                        <div
                                            key={result.service}
                                            className={`border border-gray-200 p-4 rounded-md cursor-pointer ${selectedShipping === result ? 'bg-gray-400' : ''}`}
                                            onClick={() => handleShippingSelect(result)}
                                        >
                                            <h3 className="text-lg font-semibold">{result.description}</h3>
                                            <p>Biaya: {formatCurr(result.cost[0].value)}</p>
                                            <p>Estimasi Pengiriman: {result.cost[0].etd}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div> */}

                {/* Bagian Total Harga */}
                <div className="bg-white border border-secondary-color p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-4">Detail Belanja</h2>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold">Tax (11%) :</h3>
                            <p>{formatCurr(subPPN)}</p>
                        </div>
                        {/* <div>
                            <h3 className="text-lg font-semibold">Ongkir :</h3>
                            <p>{selectedShipping ? formatCurr(selectedShipping.cost[0].value) : '-'}</p>
                        </div> */}
                        <div>
                            <h3 className="text-lg font-semibold">Total :</h3>
                            <p>{formatCurr(subtotal)}</p>
                        </div>
                        <DangerButton onClick={handleSubmit} className="flex justify-center items-center bg-gray-600 hover:bg-red-500 text-white">
                            Bayar Sekarang
                        </DangerButton>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">
                            Apakah Anda yakin ingin menghapus item ini dari keranjang Anda?
                        </h2>
                        <div className="flex justify-end gap-4">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setShowPopup(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(cartToDelete)}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartList;
