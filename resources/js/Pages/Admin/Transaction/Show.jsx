import ProductsList from "@/Components/Admin/Products/ProductsList";
import TransactionsList from "@/Components/Admin/Transaction/TransactionsList";
import { Paginator } from "@/Components/Paginator";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, router } from "@inertiajs/react";


const Show = ({transaction,auth}) => {
    // console.log(transaction);
    Echo.private(`trans.paid.${auth.user.user_id}`).listen('TransactionPaid', ({trans}) => {
        if(trans.status_payment == 'settlement'){
            router.visit(route("admin.transaction"), { method: 'get' })
        }
    })

    return (
        <Authenticated
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {transaction.data.invoice}
                </h2>
            }
        >
            <Head title={`Your Order - ${transaction.data.invoice}`} />
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            {transaction.data.qr_code ? (
                                <img 
                                    className='border shadow-sm rounded-lg' 
                                    src={transaction.data.qr_code} 
                                    alt="QR Code" 
                                />
                            ) : null}
                            {transaction.data.bank ? (
                                <div>
                                    <div className='p-2 rounded-lg text-blue-900 bg-gradient-to-r from-blue-200 via-transparent to-transparent'>
                                        <div>
                                            <strong className="font-semibold uppercase">
                                                {transaction.data.bank.bank}
                                            </strong> 
                                            Virtual Account Number 
                                        </div>
                                        <div>
                                            {transaction.data.bank.va_number}
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <h1 className='font-semibold text-2xl mb-4'>Instruksi Pembayaran</h1>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Reprehenderit officia repellat vel sit.</li>
                                <li>Incidunt reiciendis officia quidem at.</li>
                                <li>Iure ratione fugit enim vitae!</li>
                                <li>Voluptas vel voluptates non reiciendis.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
