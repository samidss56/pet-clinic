import React, { useState, useEffect } from 'react';
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import axios from 'axios';
import TextArea from '@/Components/TextArea';

const Create = ({ auth, title }) => {
    const { data, setData, errors, post } = useForm({
        name: auth.user.name,
        profile: auth.user.profile,
        content: "",
    });

    const [schedules, setSchedules] = useState([]);
    const [bookedSchedules, setBookedSchedules] = useState([]);
    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [validationError, setValidationError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validationError) {
            post(route("owner.testimonials.store"), { data });
        }
    };

    // const petOptions = pets.map(pet => ({ value: pet.pet_id, label: pet.name }));
    // const doctorOptions = docters.map(doctor => ({ value: doctor.docter_id, label: doctor.name }));
    const appUrl = import.meta.env.VITE_APP_URL;

    return (
        <Authenticated user={auth}>
            <Head title={title} />
            <div className="py-12 px-4">
                <div className="w-full mx-auto sm:px-2 lg:px-4">

                    <form onSubmit={handleSubmit} className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray">
                        <h2 className="mb-4 font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                            {title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 py-1">
                            <div className="border rounded-lg p-4">
                                {/* <h2 className="text-xl font-bold">{auth.user.name}</h2> */}
                                <div className="p-4">
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        className="block w-full border-gray-300 rounded-md shadow-sm"
                                        value={auth.user.name}
                                        readOnly
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className="p-4">
                                    <InputLabel htmlFor="content" value="Testimonial" />
                                    <TextArea
                                        id="content"
                                        type="text"
                                        className="block w-full border-gray-300 rounded-md shadow-sm"
                                        value={data.content}
                                        onChange={(e) => {
                                            const trimmedValue = e.target.value.slice(0, 75);
                                            setData("content", trimmedValue);
                                          }}
                                        maxLength={75}
                                        required
                                    />
                                    <InputError message={errors.content} className="mt-2" />
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div className='p-4'>
                                    <InputLabel htmlFor="profile" value="Profile Picture" />
                                    <img className='w-60' src={auth.user.profile ? `${appUrl}/storage/${auth.user.profile}` : 'https://via.placeholder.com/150'} alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* <Link href={route("admin.articles")}>
                                <SecondaryButton className=" gap-2">
                                    <ArrowLeftIcon />
                                    Back To Articles
                                </SecondaryButton>
                            </Link> */}
                            <PrimaryButton className="mt-4" type="submit">
                                Create Testimonial
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
