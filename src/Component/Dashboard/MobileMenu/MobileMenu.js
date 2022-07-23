import React from 'react';
import { Link } from 'react-router-dom';
import "../../Dashboard/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightArrowLeft, faBriefcase, faCarSide, faGear, faHome, faList, faMoneyBill,
    faMoneyBillTransfer, faMoneyCheckDollar, faTableList, faTruck, faUser, faWarehouse,
    faDollarSign, faBox, faTruckFast, faTruckPickup, faHandHolding, faPersonRunning, faTruckMoving, faClipboardList, faArrowRotateLeft, faRetweet, faFilePen, faHandshake,
    faTruckLoading, faPen, faArrowUpWideShort, faArrowTurnDown, faPersonBiking, faBars,
} from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ visible, setVisible }) => {
    return (
        <>
            <div
                className="lg:hidden block w-full fixed top-[7.9%] left-0 bg-[#121927] h-screen mobileMenuBar"
                style={{ display: `${visible}` }}>
                {/* Dashboard Menu Here */}
                <div className='bg-[#1a2438] h-[85vh] mb-[5vh] overflow-y-scroll'>
                    <div className='text-md lg:pt-4 pt-0'>
                        {/* Sigle Menu */}
                        <div
                            className={
                                window?.location?.pathname === "/dashboard" && "activeButton"
                            }>
                            <Link
                                to='/dashboard'
                                className='text-gray-300 hover:text-green-500 duration-200 accordion accordion-item'
                                id='accordionExample'
                                onClick={() =>
                                    setVisible("none")
                                }>
                                <div
                                    className='flex items-center px-3 py-2 duration-300'
                                    type='button'>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faHome}
                                            className='w-5 h-5 text-green-500'
                                        />
                                    </div>
                                    <div className='flex justify-between items-center w-full'>
                                        <h5 className='ml-4 font-semibold'>Home </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div
                            className={
                                window?.location?.pathname.includes("/dashboard/profile") &&
                                "activeButton"
                            }>
                            <Link
                                to='/dashboard/profile'
                                className=' text-gray-300 hover:text-green-500 duration-200 accordion accordion-item'
                                id='accordionExample'
                                onClick={() =>
                                    setVisible("none")
                                }>
                                <div
                                    className='flex items-center px-3 py-2 duration-300'
                                    type='button'>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            className='w-5 h-5 text-green-500'
                                        />
                                    </div>
                                    <div className='flex justify-between items-center w-full'>
                                        <h5 className='ml-4'>Profile</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div
                            className={
                                window?.location?.pathname.includes("/dashboard/riderRequest") &&
                                "activeButton"
                            }>
                            <Link
                                onClick={() =>
                                    setVisible("none")
                                }
                                to='/dashboard/riderRequest'
                                className=' text-gray-300 hover:text-green-500 duration-200 accordion accordion-item'
                                id='accordionExample'>
                                <div
                                    className='flex items-center px-3 py-2  duration-300'
                                    type='button'>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faPersonBiking}
                                            className='w-5 h-5 text-green-500'
                                        />
                                    </div>
                                    <div className='flex justify-between items-center w-full'>
                                        <h5 className='ml-4'>Rider Request</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div
                            className='text-gray-300 hover:text-green-500 duration-200 accordion accordion-item cursor-pointer'
                            id='accordionExample'>
                            <div
                                className='flex items-center px-3 py-2 accordion-button collapsed relative  duration-300'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseTwo'
                                aria-expanded='false'
                                aria-controls='collapseTwo'>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faTruckPickup}
                                        className='w-5 h-5 text-green-500'
                                    />
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <h5 className='ml-4'>Pickup Parcel</h5>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div
                                className='flex flex-col gap-y-1 text-left pl-2 text-gray-300 hover:text-[white] accordion-collapse collapse'
                                data-bs-parent='#accordionExample'
                                id='collapseTwo'>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/pickupParcelList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        to='pickupParcelList'
                                        className=" text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block"
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Pickup Parcel List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/generatePickupRiderRun",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='generatePickupRiderRun'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faPersonRunning}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Generate Pickup Rider Run
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/pickupRiderRunList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='pickupRiderRunList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faTruckFast}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Pickup Rider Run List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/genBranchTransfer",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='genBranchTransfer'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faClipboardList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Generate Branch Transfer (Trip)
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/deliveryBranchTransferList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='deliveryBranchTransferList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faArrowRotateLeft}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Delivery Branch Transfer List (Trip)
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className='text-gray-300 hover:text-green-500 duration-200 accordion accordion-item cursor-pointer'
                            id='accordionExample'>
                            <div
                                className='flex items-center duration-300 px-3 py-2 accordion-button collapsed relative transition'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseThree'
                                aria-expanded='false'
                                aria-controls='collapseThree'>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faTruckMoving}
                                        className='w-5 h-5 text-green-500'
                                    />
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='ml-4'>Delivery Parcel</div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div
                                className='flex flex-col gap-y-1 text-left pl-2 text-gray-300 hover:text-[white] accordion-collapse collapse'
                                data-bs-parent='#accordionExample'
                                id='collapseThree'>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/deliveryParcelList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='deliveryParcelList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faClipboardList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Delivery Parcel List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/generateDeliveryRiderRun",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='generateDeliveryRiderRun'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faTruckLoading}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Generate Delivery Rider Run
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/deliveryRiderRunList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='deliveryRiderRunList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faClipboardList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Delivery Rider Run List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/receivedTransferList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='receivedTransferList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faHandshake}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Received Transfer List (Trip)
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/deliveryPaymentGenerate",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='deliveryPaymentGenerate'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faFilePen}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Delivery Payment Generate
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/deliveryPaymentList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='deliveryPaymentList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faClipboardList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Delivery Payment List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/returnBranchTransfer",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='returnBranchTransfer'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faRetweet}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Return Branch Transfer (Trip)
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/returnBranchTransferList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200'
                                        to='returnBranchTransferList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faArrowRotateLeft}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Return Branch Transfer List (Trip)
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className='text-gray-300 hover:text-green-500 duration-200 accordion accordion-item cursor-pointer'
                            id='accordionExample'>
                            <div
                                className='flex items-center px-3 py-2 duration-300 accordion-button collapsed relative transition'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseFour'
                                aria-expanded='false'
                                aria-controls='collapseFour'>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faArrowRotateLeft}
                                        className='w-5 h-5 text-green-500'
                                    />
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='ml-4'>Return Parcel</div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div
                                className='flex flex-col gap-y-1 text-left pl-2 text-gray-300 hover:text-[white] accordion-collapse collapse'
                                data-bs-parent='#accordionExample'
                                id='collapseFour'>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/returnParcelList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='returnParcelList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faClipboardList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Return Parcel List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/generateReturnRiderRun",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='generateReturnRiderRun'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Generate Return Rider Run
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/returnRiderRunList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='returnRiderRunList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faArrowUpWideShort}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Return Rider Run List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/ReceivedReturnTransferList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='ReceivedReturnTransferList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faArrowTurnDown}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Received Return Transfer List (Trip)
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className='text-gray-300 hover:text-green-500 duration-200 accordion accordion-item cursor-pointer'
                            id='accordionExample'>
                            <div
                                className='flex items-center px-3 py-2 duration-300  accordion-button collapsed relative transition'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseFive'
                                aria-expanded='false'
                                aria-controls='collapseFive'>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faBox}
                                        className='w-5 h-5 text-green-500'
                                    />
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='ml-2'>Traditional Parcel Booking</div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div
                                className='flex flex-col gap-y-1 text-left pl-2 text-gray-300 hover:text-[white] accordion-collapse collapse'
                                data-bs-parent='#accordionExample'
                                id='collapseFive'>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/parcelBooking",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='parcelBooking'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faTruckFast}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        New Parcel Booking
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/bookingParcelList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='bookingParcelList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Booking Parcel List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/BookingParcelVehicle",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='BookingParcelVehicle'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faTruckPickup}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Booking Parcel Assign Vehicle
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/bookingParcelReceiveList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='bookingParcelReceiveList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Booking Parcel Receive List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/receiveBookingParcel",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='receiveBookingParcel'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faHandHolding}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Receive Booking Parcel
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className='text-gray-300 hover:text-green-500 duration-200 accordion accordion-item cursor-pointer'
                            id='accordionExample'>
                            <div
                                className='flex items-center duration-300 px-3 py-2 accordion-button collapsed relative transition'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseSix'
                                aria-expanded='false'
                                aria-controls='collapseSix'>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faDollarSign}
                                        className='w-5 h-5 text-green-500'
                                    />
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='ml-2'>Traditional Parcel Payment</div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div
                                className='flex flex-col gap-y-1 text-left pl-2 text-gray-300 hover:text-[white] accordion-collapse collapse'
                                data-bs-parent='#accordionExample'
                                id='collapseSix'>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/parcelPaymentList",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='parcelPaymentList'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faMoneyBill}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Parcel Payment List
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/paymentForward",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='paymentForward'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faMoneyBillTransfer}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Payment Forward to Accounts
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/parcelPaymentReport",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='parcelPaymentReport'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faMoneyCheckDollar}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Parcel Payment Report
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className='text-gray-300 hover:text-green-500 duration-200 accordion accordion-item cursor-pointer'
                            id='accordionExample'>
                            <div
                                className='flex items-center px-3 py-2  accordion-button collapsed relative transition duration-300'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseSeven'
                                aria-expanded='false'
                                aria-controls='collapseSeven'>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faGear}
                                        className='w-5 h-5 text-green-500'
                                    />
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='ml-4'>Traditional Parcel Setting</div>
                                </div>
                            </div>
                            {/* Dashboard Sub Menu */}
                            <div
                                className='flex flex-col gap-y-1 text-left pl-2 text-gray-300 hover:text-[white] accordion-collapse collapse'
                                data-bs-parent='#accordionExample'
                                id='collapseSeven'>
                                <div
                                    className={
                                        window?.location?.pathname.includes("/dashboard/vehicle") &&
                                        "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='vehicle'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faTruck}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Vehicle
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname.includes(
                                            "/dashboard/warehouse",
                                        ) && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='warehouse'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faWarehouse}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Warehouse
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname ===
                                        "/dashboard/itemCategory"
                                        && "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='itemCategory'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faTableList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Item Category
                                    </Link>
                                </div>
                                <div
                                    className={
                                        window?.location?.pathname === "/dashboard/item" &&
                                        "activeButton"
                                    }>
                                    <Link
                                        className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
                                        to='item'
                                        onClick={() =>
                                            setVisible("none")
                                        }>
                                        <FontAwesomeIcon
                                            icon={faList}
                                            className='h-5 w-5 inline mr-4 text-green-500'
                                        />
                                        Item
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                window?.location?.pathname.includes(
                                    "/dashboard/orderTracking",
                                ) && "activeButton"
                            }>
                            <Link
                                to='orderTracking'
                                className=' text-gray-300 hover:text-green-500 duration-200 accordion accordion-item'
                                id='accordionExample'
                                onClick={() =>
                                    setVisible("none")
                                }>
                                <div
                                    className='flex items-center px-3 py-2 duration-300'
                                    type='button'>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faArrowRightArrowLeft}
                                            className='w-5 h-5 text-green-500'
                                        />
                                    </div>
                                    <div className='flex justify-between items-center w-full'>
                                        <h5 className='ml-4'> Order Tracking </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div
                            className={
                                window?.location?.pathname.includes(
                                    "/dashboard/marchentList",
                                ) && "activeButton"
                            }>
                            <Link
                                to='marchentList'
                                className=' text-gray-300 hover:text-green-500 duration-200 accordion accordion-item'
                                id='accordionExample'
                                onClick={() =>
                                    setVisible("none")
                                }>
                                <div
                                    className='flex items-center px-3 py-2 duration-300'
                                    type='button'>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faBriefcase}
                                            className='w-5 h-5 text-green-500'
                                        />
                                    </div>
                                    <div className='flex justify-between items-center w-full'>
                                        <h5 className='ml-4'>Marchent List</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div
                            className={
                                window?.location?.pathname.includes("/dashboard/riderList") &&
                                "activeButton"
                            }>
                            <Link
                                to='riderList'
                                className=' text-gray-300 hover:text-green-500 duration-200 accordion accordion-item'
                                id='accordionExample'
                                onClick={() =>
                                    setVisible("none")
                                }>
                                <div
                                    className='flex items-center px-3 py-2 duration-300'
                                    type='button'>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faCarSide}
                                            className='w-5 h-5 text-green-500'
                                        />
                                    </div>
                                    <h5 className='ml-4'> Rider list</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;