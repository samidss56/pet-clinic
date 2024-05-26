import React, { useState, useEffect } from 'react';
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import axios from 'axios';

const Create = ({ auth, title, pets, docters, pet_id }) => {
    // console.log(pet_id);
    const { data, setData, errors, post } = useForm({
        pet_id: pet_id.pet_id,
        docter_id: "",
        date_appointmens: "",
        description: "",
        jadwal: "",
    });

    // console.log(data.pet_id)
    const [schedules, setSchedules] = useState([]);
    const [selectedSchedule, setSelectedSchedule] = useState(null);

    const handleDoctorChange = async (e) => {
        const docterId = e.target.value;
        setData("docter_id", docterId);

        if (docterId) {
            try {
                const response = await axios.get(`/doctor-schedule/${docterId}`);
                setSchedules(response.data);
                setSelectedSchedule(null);
            } catch (error) {
                console.error('Error fetching doctor schedule', error);
            }
        } else {
            setSchedules([]);
        }
    };

    const handleScheduleClick = (schedule) => {
        setSelectedSchedule(schedule.id);
        setData("jadwal", schedule.schedule);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("owner.appointmen.store"), { data });
    };

    const petOptions = pets.map(pet => ({ value: pet.pet_id, label: pet.name }));
    const doctorOptions = docters.map(doctor => ({ value: doctor.docter_id, label: doctor.name }));
    const appUrl = import.meta.env.VITE_APP_URL;

    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">
                    <form onSubmit={handleSubmit} className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 py-1">
                            <div className="border rounded-lg p-4">
                                <h2 className="text-xl font-bold">{pet_id.name}</h2>
                                <p>Type: {pet_id.type}</p>
                                <p>Umur: {pet_id.age}</p>
                                <p>Jenis Kelamin: {pet_id.gender}</p>
                            </div>
                            <div className="border rounded-lg p-4">
                                <img className='w-60' src={`${appUrl}/storage/${pet_id.image}`} alt="" />
                            </div>
                        </div>

                        <InputLabel htmlFor="docter_id" value="Doctor" />
                        <select
                            id="docter_id"
                            name="docter_id"
                            className="block w-full border-gray-300 rounded-md shadow-sm"
                            value={data.docter_id}
                            onChange={handleDoctorChange}
                            required
                        >
                            <option value="">Select Doctor</option>
                            {doctorOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                        </select>
                        <InputError message={errors.docter_id} className="mt-2" />

                        {schedules.map((schedule) => (
                            <button
                                type="button"
                                key={schedule.id}
                                className={`p-2 m-2 border rounded ${
                                    selectedSchedule === schedule.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white border-gray-300'
                                } ${schedule.is_aktif === '0' ? 'bg-gray-900 text-white cursor-not-allowed' : ''}`}
                                onClick={() => handleScheduleClick(schedule)}
                                disabled={schedule.is_aktif === '0'}
                            >
                                {`${schedule.day} - ${schedule.schedule}`}
                            </button>
                        ))}
                        {/* {schedules.length > 0 && (
                            <div className="mt-4">
                                <InputLabel value="Select Schedule" />
                                <div className="flex gap-3 mb-2">
                                    {schedules.map((schedule) => (
                                        <button
                                            type="button"
                                            key={schedule.id}
                                            className={`p-2 border rounded ${
                                                selectedSchedule === schedule.id
                                                    ? 'bg-white text-primary-red border-[1.5px] border-primary-red'
                                                    : 'bg-white border-gray-300'
                                            }`}
                                            onClick={() => handleScheduleClick(schedule)}
                                        >
                                            {`${schedule.day} - ${schedule.schedule}`}
                                        </button>
                                    ))}
                                </div>
                                <InputError message={errors.jadwal} className="mt-2" />
                            </div>
                        )} */}

                        <InputLabel htmlFor="date_appointmens" value="Appointment Date" />
                        <TextInput
                            id="date_appointmens"
                            type="date"
                            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm"
                            value={data.date_appointmens}
                            onChange={(e) => setData("date_appointmens", e.target.value)}
                            required
                        />
                        <InputError message={errors.date_appointmens} className="mt-2" />

                        <InputLabel htmlFor="description" value="Description" />
                        <TextInput
                            id="description"
                            type="text"
                            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm"
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            required
                        />
                        <InputError message={errors.description} className="mt-2" />

                        <TextInput
                            id="jadwal"
                            type="hidden"
                            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm"
                            value={selectedSchedule ? schedules.find(s => s.id === selectedSchedule)?.schedule : ''}
                            readOnly
                        />
                        <InputError message={errors.jadwal} className="mt-2" />

                        <div>
                            <PrimaryButton className="mt-4" type="submit">
                                Create Appointment
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
