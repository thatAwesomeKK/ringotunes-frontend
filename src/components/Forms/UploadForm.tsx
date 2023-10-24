'use client'
import { uploadRing as uploadRingCall } from '@/lib/apiCalls/rings';
import { useAppSelector } from '@/lib/redux/store';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { MdUpload } from 'react-icons/md';

const UploadForm = () => {
    const [uploadRing, setUploadRing] = useState<string | null | Blob>(null);
    const [showcaseRing, setShowcaseRing] = useState<string | null>(null);
    const [uploadRingImg, setUploadRingImg] = useState<string | null>(null);
    const [selectedOrigin, setSelectedOrigin] = useState("");
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    // Form reset Function
    const resetForm = () => {
        setUploadRing(null);
        setUploadRingImg(null);
        setSelectedOrigin("");
        setTitle("");
    };

    //Picking Up From system and adding to UploadRing State
    const addRingToUpload = (e: any) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            setUploadRing(e.target.files[0]);
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = async (readerEvent) => {
            setShowcaseRing(readerEvent.target?.result! as string);
        };
    };

    //Picking Up From system and adding to UploadRingImage State
    const addRingImageToUpload = (e: any) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = async (readerEvent) => {
            setUploadRingImg(readerEvent.target?.result! as string);
        };
    };

    //Uploading with a Button using API
    const upload = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const fd = new FormData();
        fd.append("file", uploadRing as string | Blob);
        fd.append("image", uploadRingImg as string);
        fd.append("origin", selectedOrigin as string);
        fd.append("title", title as string);

        await uploadRingCall(fd)
        setLoading(false);
    };

    // Reference to the Image Preview
    const uploadRef = useRef<HTMLInputElement>(null);
    const uploadImgRef = useRef<HTMLInputElement>(null);
    return (
        <div className="flex justify-center items-center h-screen">
            {/* {loading && <h1 className="font-bold text-3xl">Loading....</h1>} */}
            <div className="w-full h-full justify-center items-center flex flex-col space-y-2">
                <h1 className="font-extrabold text-7xl mb-2">Upload</h1>
                <hr className="w-60 bg-gray-400 h-[0.1rem]" />

                <form
                    onSubmit={upload}
                    className="flex flex-col justify-center items-center bg-white lg:w-[45%] md:w-[50%] sm:w-[60%] w-[90%] h-[50%] rounded-xl shadow-xl"
                >
                    {uploadRing && <audio controls className="z-0" src={showcaseRing!} />}
                    <div className="w-[70%] mt-4">
                        <input
                            type="text"
                            value={title}
                            className="p-2 border bg-slate-100 rounded-lg w-full focus:outline-blue-300 focus:shadow-outline"
                            placeholder="Enter Ring Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-evenly items-center w-[70%] my-4">
                        {!uploadRing && (
                            <div
                                className="cursor-pointer flex flex-col justify-center items-center"
                                onClick={() => uploadRef.current?.click()}
                            >
                                <div className="bg-slate-200 rounded-full p-10 drop-shadow-lg flex justify-center items-center group">
                                    <MdUpload className="h-8 w-8 group-hover:scale-150 transition duration-150 ease-in-out" />
                                </div>
                                <p className="font-light text-lg">Select Ringtone</p>
                                <input
                                    ref={uploadRef}
                                    hidden
                                    type="file"
                                    accept="audio/*"
                                    onChange={(e: any) => addRingToUpload(e)}
                                />
                            </div>
                        )}

                        <div
                            className="cursor-pointer flex flex-col justify-center items-center"
                            onClick={() => uploadImgRef.current?.click()}
                        >
                            <div className="relative h-28 w-28 group overflow-hidden rounded-full">
                                <Image
                                    className="object-cover rounded-full hover:scale-150 transition duration-150 ease-in-out"
                                    src={uploadRingImg || "/images/defaultRingIMG.png"}
                                    alt=""
                                    fill={true}
                                />
                            </div>
                            <p className="font-light text-lg">Select Thumbnail</p>
                            <input
                                ref={uploadImgRef}
                                hidden
                                type="file"
                                accept="image/x-png,image/jpeg,image/png,image/jpg"
                                onChange={(e: any) => addRingImageToUpload(e)}
                            />
                        </div>
                    </div>
                    <div className="flex w-[70%] justify-evenly my-4">
                        <div className="flex justify-center items-center space-x-1">
                            <input
                                type="radio"
                                id="bollywood"
                                value="bollywood"
                                name="origin"
                                className="w-5 h-5"
                                onChange={(e) => setSelectedOrigin(e.target.value)}
                            />
                            <label htmlFor="bollywood" className="">
                                Bollywood
                            </label>
                        </div>
                        <div className="flex justify-center items-center space-x-1">
                            <input
                                type="radio"
                                id="hollywood"
                                value="hollywood"
                                name="origin"
                                className="w-5 h-5"
                                onChange={(e) => setSelectedOrigin(e.target.value)}
                            />
                            <label className="" htmlFor="hollywood">
                                Hollywood
                            </label>
                        </div>
                        <div className="flex justify-center items-center space-x-1">
                            <input
                                type="radio"
                                id="tollywood"
                                value="tollywood"
                                name="origin"
                                className="w-5 h-5"
                                onChange={(e) => setSelectedOrigin(e.target.value)}
                            />
                            <label htmlFor="tollywood" className="">
                                Tollywood
                            </label>
                        </div>
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className={`bg-purple-400 hover:bg-purple-500 rounded-xl hover:font-medium text-lg py-3 px-5 shadow-xl hover:scale-105 transition duration-150 ease-in-out my-4 ${loading && "disabled:bg-purple-300"
                            }`}
                    >
                        Upload Your Ringtone
                    </button>
                    <button
                        type="reset"
                        onClick={() => resetForm()}
                        className="bg-red-400 hover:bg-red-500 rounded-xl hover:font-medium text-lg py-2 px-5 shadow-lg hover:scale-105 transition duration-150 ease-in-out"
                    >
                        Reset
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UploadForm