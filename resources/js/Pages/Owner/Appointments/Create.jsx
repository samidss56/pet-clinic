import React, { useState, useEffect } from 'react';
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import axios from 'axios';

const Create = ({ auth, title, pets, docters, pet_id }) => {
    const { data, setData, errors, post } = useForm({
        pet_id: pet_id.pet_id,
        docter_id: "",
        date_appointmens: "",
        description: "",
        jadwal: "",
    });

    const [schedules, setSchedules] = useState([]);
    const [bookedSchedules, setBookedSchedules] = useState([]);
    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [validationError, setValidationError] = useState('');

    const handleDoctorChange = async (e) => {
        const docterId = e.target.value;
        setData("docter_id", docterId);

        if (docterId) {
            try {
                const response = await axios.get(`/doctor-schedule/${docterId}`);
                setSchedules(response.data);
                setSelectedSchedule(null);
                validateSchedule(docterId, data.date_appointmens);
            } catch (error) {
                console.error('Error fetching doctor schedule', error);
            }
        } else {
            setSchedules([]);
        }
    };

    const handleDateChange = (e) => {
        const date = e.target.value;
        setData("date_appointmens", date);
        validateSchedule(data.docter_id, date);
    };

    const handleScheduleClick = (schedule) => {
        setSelectedSchedule(schedule.id);
        setData("jadwal", schedule.schedule);
    };

    const validateSchedule = async (docterId, date) => {
        if (docterId && date) {
            try {
                const response = await axios.post('/owner/check-schedule-availability', {
                    docter_id: docterId,
                    date_appointmens: date,
                });

                setBookedSchedules(response.data.booked_schedules);
            } catch (error) {
                console.error('Error validating schedule', error);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validationError) {
            post(route("owner.appointmen.store"), { data });
        }
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

                        <InputLabel htmlFor="date_appointmens" value="Appointment Date" />
                        <TextInput
                            id="date_appointmens"
                            type="date"
                            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm"
                            value={data.date_appointmens}
                            onChange={handleDateChange}
                            required
                        />
                        <InputError message={errors.date_appointmens} className="mt-2" />

                        {validationError && (
                            <div className="text-red-500 mb-4">{validationError}</div>
                        )}

                        {schedules.map((schedule) => (
                            <button
                                type="button"
                                key={schedule.id}
                                className={`p-2 m-2 border rounded ${
                                    selectedSchedule === schedule.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white border-gray-300'
                                } ${
                                    schedule.is_aktif === '0' || bookedSchedules.includes(schedule.schedule)
                                        ? '!bg-gray-500 text-black cursor-not-allowed'
                                        : ''
                                }`}
                                onClick={() => handleScheduleClick(schedule)}
                                disabled={schedule.is_aktif === '0' || bookedSchedules.includes(schedule.schedule)}
                            >
                                {`${schedule.day} - ${schedule.schedule}`}
                            </button>
                        ))}

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
