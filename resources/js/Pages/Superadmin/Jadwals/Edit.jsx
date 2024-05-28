import { ArrowLeftIcon, CloseIcon, CreateIcon } from "@/Components/Icons/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

const days = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];

const Edit = ({ auth, title, jadwals, doctorSchedule }) => {
    const { data, setData, errors } = useForm({
        docter_id: jadwals.data.docter.docter_id,
        name: jadwals.data.docter.name,
        schedules:
            doctorSchedule.length > 0
                ? doctorSchedule
                : [{ schedule: "", day: "", is_aktif: "1" }],
    });

    const addSchedule = () => {
        setData("schedules", [
            ...data.schedules,
            { schedule: "", day: "", is_aktif: "1" },
        ]);
    };

    const removeSchedule = (index) => {
        const newSchedules = data.schedules.filter((_, i) => i !== index);
        setData("schedules", newSchedules);
    };

    const handleScheduleChange = (index, field, value) => {
        const newSchedules = data.schedules.map((schedule, i) =>
            i === index ? { ...schedule, [field]: value } : schedule
        );
        setData("schedules", newSchedules);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.schedules.length < 1) {
            alert("Tambah Form +1");
            return;
        }

        const formData = new FormData();
        formData.append("docter_id", data.docter_id);
        data.schedules.forEach((schedule, index) => {
            formData.append(
                `schedules[${index}][schedule]`,
                schedule.schedule || ""
            );
            formData.append(`schedules[${index}][day]`, schedule.day || "");
            formData.append(
                `schedules[${index}][is_aktif]`,
                schedule.is_aktif || "0"
            );
        });

        router.post(
            `/superadmin/jadwal/update/${jadwals.data.docter.docter_id}`,
            formData,
            {
                _method: "put",
            }
        );
    };

    return (
        <Authenticated
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    Edit Doctor Schedules
                </h2>
            }
        >
            <Head title="Edit Doctor Schedules" />
            <AdminLayout>
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="p-6 shadow-lg rounded-lg bg-white dark:bg-dark-gray"
                >
                    <InputLabel htmlFor="docter_id" value="Name Doctor" />
                    <TextInput
                        type="text"
                        id="docter_id"
                        name="docter_id"
                        className="block w-full"
                        value={data.name}
                        onChange={(e) => setData("docter_id", e.target.value)}
                    />

                    <InputLabel htmlFor="schedule" value="Schedules" />
                    {data.schedules.map((schedule, index) => (
                        <div
                            key={index}
                            className="mb-4 flex items-center gap-2"
                        >
                            <TextInput
                                type="time"
                                id={`schedule-${index}`}
                                name={`schedule-${index}`}
                                className="block w-1/4"
                                placeholder="schedule"
                                value={schedule.schedule}
                                onChange={(e) =>
                                    handleScheduleChange(
                                        index,
                                        "schedule",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <select
                                id={`day-${index}`}
                                name={`day-${index}`}
                                className="block w-1/4"
                                value={schedule.day}
                                onChange={(e) =>
                                    handleScheduleChange(
                                        index,
                                        "day",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">Pilih Hari</option>
                                {days.map((day) => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>
                            <label className="flex items-center w-1/4">
                                <input
                                    type="checkbox"
                                    checked={schedule.is_aktif === "1"}
                                    onChange={(e) =>
                                        handleScheduleChange(
                                            index,
                                            "is_aktif",
                                            e.target.checked ? "1" : "0"
                                        )
                                    }
                                />
                                <span className="ml-2">Aktif</span>
                            </label>
                            <button
                                type="button"
                                onClick={() => removeSchedule(index)}
                                className="text-red-500"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                    ))}
                    <InputError message={errors.schedule} className="mb-2" />

                    <div className="flex gap-3 mt-4">
                        <SecondaryButton
                            type="button"
                            onClick={addSchedule}
                            className="flex items-center gap-2"
                        >
                            <CreateIcon />
                            Add Schedule
                        </SecondaryButton>
                        {errors.minSchedules && (
                            <p className="text-red-500">
                                At least one schedule is required.
                            </p>
                        )}
                    </div>

                    <div className="flex gap-3 mt-4">
                        <Link href={route("superadmin.jadwal")}>
                            <SecondaryButton className="gap-2">
                                <ArrowLeftIcon />
                                Back To Jadwals
                            </SecondaryButton>
                        </Link>
                        <PrimaryButton type="submit" onClick={handleSubmit}>
                            Update Jadwals
                        </PrimaryButton>
                    </div>
                </form>
            </AdminLayout>
        </Authenticated>
    );
};

export default Edit;
