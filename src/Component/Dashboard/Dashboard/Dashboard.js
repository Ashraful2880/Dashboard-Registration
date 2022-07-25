import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import DashboardHome from "./../DashboardHome/DashboardHome";
import logo from "../../../Assests/Image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRightArrowLeft, faBars, faBriefcase, faCarSide, faGear, faHome, faList, faMoneyBill,
	faMoneyBillTransfer, faMoneyCheckDollar, faTableList, faTruck, faUser, faWarehouse,
	faDollarSign, faBox, faTruckFast, faTruckPickup, faHandHolding, faPersonRunning, faTruckMoving, faClipboardList, faArrowRotateLeft, faRetweet, faFilePen, faHandshake,
	faTruckLoading, faPen, faArrowUpWideShort, faArrowTurnDown, faBell, faEnvelopeCircleCheck,
	faPersonBiking,
} from "@fortawesome/free-solid-svg-icons";
import Profile from "../Profile/Profile";
import NotFound from "../../NotFound/NotFound";
import PickUpParcelList from "./../Pickup-Parcel/PickUpParcelList";
import GeneratePickupRiderRun from "./../Pickup-Parcel/GeneratePickupRiderRun";
import PickupRiderRunList from "../Pickup-Parcel/PickupRiderRunList";
import GenerateBranchTransfer from "./../Pickup-Parcel/GenerateBranchTransfer";
import DeliveryBranchTransferList from "./../Pickup-Parcel/DeliveryBranchTransferList";
import DeliveryParcelList from "../Delivery-Parcel/DeliveryParcelList";
import GenerateDeliveryRiderRun from "../Delivery-Parcel/GenerateDeliveryRiderRun";
import DeliveryRiderRunList from "../Delivery-Parcel/DeliveryRiderRunList";
import ReceivedTransferList from "../Delivery-Parcel/ReceivedTransferList";
import DeliveryPaymentGenerate from "./../Delivery-Parcel/DeliveryPaymentGenerate";
import DeliveryPaymentList from "./../Delivery-Parcel/DeliveryPaymentList";
import ReturnBranchTransfer from "../Delivery-Parcel/ReturnBranchTransfer";
import ReturnBranchTransferList from "../Delivery-Parcel/ReturnBranchTransferList";
import ReturnParcelList from "../Return-Parcel/ReturnParcelList";
import GenerateReturnRiderRun from "../Return-Parcel/GenerateReturnRiderRun";
import ReturnRiderRunList from "../Return-Parcel/ReturnRiderRunList";
import ReceivedReturnTransferList from "../Return-Parcel/ReceivedReturnTransferList";
import NewParcelBooking from "./../Traditional-Parcel-Booking/NewParcelBooking";
import BookingParcelList from "../Traditional-Parcel-Booking/BookingParcelList";
import BookingParcelAssignVehicle from "./../Traditional-Parcel-Booking/BookingParcelAssignVehicle";
import BookingParcelReceiveList from "../Traditional-Parcel-Booking/BookingParcelReceiveList";
import ReceiveBookingParcel from "../Traditional-Parcel-Booking/ReceiveBookingParcel";
import ParcelPaymentList from "./../Traditional-Parcel-Payment/ParcelPaymentList";
import PaymentForwardToAcc from "./../Traditional-Parcel-Payment/PaymentForwardToAcc";
import ParcelPaymentReport from "../Traditional-Parcel-Payment/ParcelPaymentReport";
import Item from "./../Traditional-Parcel-Setting/Item";
import ItemCategory from "../Traditional-Parcel-Setting/ItemCategory";
import Warehouse from "../Traditional-Parcel-Setting/Warehouse";
import Vehicle from "./../Traditional-Parcel-Setting/Vehicle";
import OrderTracking from "../OrderTracking/OrderTracking";
import RiderList from "./../RiderList/RiderList";
import MarchantList from "./../MarchentList/MarchantList";
import useAuth from "./../../../Hooks/UseAuth";
import RiderRequest from "../RiderRequest/RiderRequest";
import MobileMenu from "../MobileMenu/MobileMenu";
import WirehouseRiderRun from './../WirehouseRiderRun/WirehouseRiderRun';
import WirehouseRunList from "../WirehouseRunList/WirehouseRunList";

const Dashboard = () => {
	const { handleSignOut } = useAuth();
	const [visible, setVisible] = useState("none");
	return (
		<main className='w-full'>
			{/* Dashboard Menu Area */}
			<aside
				className="lg:w-[15%] w-full fixed top-0 left-0 bg-[#121927] h-screen mobileMenuAnimation">
				{/* Main Logo */}
				<div className='min-h-[5vh]'>
					<Link to='/home'>
						<img
							src={logo}
							alt='Main logo'
							className=' h-14 w-20 mx-auto my-3'
						/>
					</Link>
				</div>
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
								id='accordionExample'>
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
								id='accordionExample'>
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
								data-bs-target='#wirehouseCollapse'
								aria-expanded='false'
								aria-controls='wirehouseCollapse'>
								<div>
									<FontAwesomeIcon
										icon={faTruckPickup}
										className='w-5 h-5 text-green-500'
									/>
								</div>
								<div className='flex justify-between items-center w-full'>
									<h5 className='ml-4'>Warehouse Trip</h5>
								</div>
							</div>
							{/* Dashboard Sub Menu */}
							<div
								className='flex flex-col gap-y-1 text-left pl-2 text-gray-300 hover:text-[white] accordion-collapse collapse'
								data-bs-parent='#accordionExample'
								id='wirehouseCollapse'>
								<div
									className={
										window?.location?.pathname.includes(
											"/dashboard/wirehouseRiderRun",
										) && "activeButton"
									}>
									<Link
										to='wirehouseRiderRun'
										className=" text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block">
										<FontAwesomeIcon
											icon={faList}
											className='h-5 w-5 inline mr-2 text-green-500'
										/>
										Wirehouse Rider Run
									</Link>
								</div>
								<div
									className={
										window?.location?.pathname.includes(
											"/dashboard/wirehouseRunList",
										) && "activeButton"
									}>
									<Link
										className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
										to='wirehouseRunList'>
										<FontAwesomeIcon
											icon={faPersonRunning}
											className='h-5 w-5 inline mr-2 text-green-500'
										/>
										Warehouse Run List
									</Link>
								</div>
							</div>
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
										className=" text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block">
										<FontAwesomeIcon
											icon={faList}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='generatePickupRiderRun'>
										<FontAwesomeIcon
											icon={faPersonRunning}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='pickupRiderRunList'>
										<FontAwesomeIcon
											icon={faTruckFast}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='genBranchTransfer'>
										<FontAwesomeIcon
											icon={faClipboardList}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='deliveryBranchTransferList'>
										<FontAwesomeIcon
											icon={faArrowRotateLeft}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='deliveryParcelList'>
										<FontAwesomeIcon
											icon={faClipboardList}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='generateDeliveryRiderRun'>
										<FontAwesomeIcon
											icon={faTruckLoading}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='deliveryRiderRunList'>
										<FontAwesomeIcon
											icon={faClipboardList}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='receivedTransferList'>
										<FontAwesomeIcon
											icon={faHandshake}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='deliveryPaymentGenerate'>
										<FontAwesomeIcon
											icon={faFilePen}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='deliveryPaymentList'>
										<FontAwesomeIcon
											icon={faClipboardList}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='returnBranchTransfer'>
										<FontAwesomeIcon
											icon={faRetweet}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='returnBranchTransferList'>
										<FontAwesomeIcon
											icon={faArrowRotateLeft}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='returnParcelList'>
										<FontAwesomeIcon
											icon={faClipboardList}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='generateReturnRiderRun'>
										<FontAwesomeIcon
											icon={faPen}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='returnRiderRunList'>
										<FontAwesomeIcon
											icon={faArrowUpWideShort}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='ReceivedReturnTransferList'>
										<FontAwesomeIcon
											icon={faArrowTurnDown}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='parcelBooking'>
										<FontAwesomeIcon
											icon={faTruckFast}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='bookingParcelList'>
										<FontAwesomeIcon
											icon={faList}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='BookingParcelVehicle'>
										<FontAwesomeIcon
											icon={faTruckPickup}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='bookingParcelReceiveList'>
										<FontAwesomeIcon
											icon={faList}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='receiveBookingParcel'>
										<FontAwesomeIcon
											icon={faHandHolding}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='parcelPaymentList'>
										<FontAwesomeIcon
											icon={faMoneyBill}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='paymentForward'>
										<FontAwesomeIcon
											icon={faMoneyBillTransfer}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='parcelPaymentReport'>
										<FontAwesomeIcon
											icon={faMoneyCheckDollar}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='vehicle'>
										<FontAwesomeIcon
											icon={faTruck}
											className='h-5 w-5 inline mr-2 text-green-500'
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
										to='warehouse'>
										<FontAwesomeIcon
											icon={faWarehouse}
											className='h-5 w-5 inline mr-2 text-green-500'
										/>
										Warehouse
									</Link>
								</div>
								<div
									className={
										window?.location?.pathname.includes(
											"/dashboard/itemCategory",
										) && "activeButton"
									}>
									<Link
										className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
										to='itemCategory'>
										<FontAwesomeIcon
											icon={faTableList}
											className='h-5 w-5 inline mr-2 text-green-500'
										/>
										Item Category
									</Link>
								</div>
								<div
									className={
										window?.location?.pathname.includes("/dashboard/item") &&
										"activeButton"
									}>
									<Link
										className='text-gray-300 hover:text-green-500 duration-200 px-2 py-2 inline-block'
										to='item'>
										<FontAwesomeIcon
											icon={faList}
											className='h-5 w-5 inline mr-2 text-green-500'
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
								id='accordionExample'>
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
								id='accordionExample'>
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
								id='accordionExample'>
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
			</aside>
			{/* Mobile Menu Here */}
			<MobileMenu visible={visible} setVisible={setVisible} />
			{/* Dashboard Header Area */}
			<div
				className="w-[85%] ml-[15%] border border-transparent pt-0 mt-0 sidelayout">
				<div
					className="h-16 w-full flex flex-col justify-center items-start px-5 fixed top-0 bg-[#1a2438] overflow-hidden z-50 lg:left-[15%] left-0">
					<div
						className="flex justify-between items-center lg:w-[85%] w-full">
						<div className='flex lg:gap-x-5 gap-x-2 text-gray-100 items-center'>
							<Link to='/home' className='lg:hidden block'>
								<img src={logo} alt='Main logo' className='h-8 w-8' />
							</Link>
							{visible === "none" ? <button className="lg:hidden block pt-1 px-3"
								onClick={() =>
									setVisible(visible === "block" ? "none" : "block")
								}
							>
								<FontAwesomeIcon
									icon={faBars}
									className='hover:text-green-500 duration-150 font-bold text-lg'
								/>
							</button>
								: <button className="lg:hidden block pt-1 px-3"
									onClick={() =>
										setVisible(visible === "block" ? "none" : "block")
									}
								>
									<svg
										className="h-7 w-7"
										viewBox="0 0 24 24"
										fill="none"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="18" y1="6" x2="6" y2="18" />
										<line x1="6" y1="6" x2="18" y2="18" />
									</svg>
								</button>}
							<Link
								to='/dashboard'
								className='font-semibold hover:text-green-500 duration-200'>
								Dashboard
							</Link>
							<Link
								to='/dashboard/profile'
								className='lg:block hidden font-semibold hover:text-green-500 duration-200'>
								Profiles
							</Link>
							<button
								onClick={handleSignOut}
								className='font-semibold hover:text-green-500 duration-200'>
								Logout
							</button>
						</div>
						<div className='flex lg:gap-x-5 gap-x-2 text-gray-400 items-center'>
							<Link to='/dashboard'>
								<FontAwesomeIcon
									icon={faBell}
									className='text-xl text-gray-200 hover:text-green-500'
								/>
							</Link>
							<Link to='/dashboard/users'>
								<FontAwesomeIcon
									icon={faEnvelopeCircleCheck}
									className='text-xl text-gray-200 hover:text-green-500'
								/>
							</Link>
							<div className='cursor-pointer'>
								<img
									src='https://avatars.githubusercontent.com/u/86690202?v=4'
									alt='User icon'
									className='w-10 h-10 border rounded-full'
								/>
							</div>
						</div>
					</div>
				</div>
				{/* Dashboard Right Content Area */}
				<div className='min-h-screen mt-20'>
					<Routes>
						<Route path='/' element={<DashboardHome />} />
						<Route path='/*' element={<NotFound />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/riderRequest' element={<RiderRequest />} />
						<Route path='/wirehouseRiderRun' element={<WirehouseRiderRun />} />
						<Route path='/wirehouseRunList' element={<WirehouseRunList />} />
						<Route path='/pickupParcelList' element={<PickUpParcelList />} />
						<Route
							path='/generatePickupRiderRun'
							element={<GeneratePickupRiderRun />}
						/>
						<Route
							path='/pickupRiderRunList'
							element={<PickupRiderRunList />}
						/>
						<Route
							path='/genBranchTransfer'
							element={<GenerateBranchTransfer />}
						/>
						<Route
							path='/deliveryBranchTransferList'
							element={<DeliveryBranchTransferList />}
						/>
						<Route
							path='/deliveryParcelList'
							element={<DeliveryParcelList />}
						/>
						<Route
							path='/generateDeliveryRiderRun'
							element={<GenerateDeliveryRiderRun />}
						/>
						<Route
							path='/deliveryRiderRunList'
							element={<DeliveryRiderRunList />}
						/>
						<Route
							path='/receivedTransferList'
							element={<ReceivedTransferList />}
						/>
						<Route
							path='/deliveryPaymentGenerate'
							element={<DeliveryPaymentGenerate />}
						/>
						<Route
							path='/deliveryPaymentList'
							element={<DeliveryPaymentList />}
						/>
						<Route
							path='/returnBranchTransfer'
							element={<ReturnBranchTransfer />}
						/>
						<Route
							path='/returnBranchTransferList'
							element={<ReturnBranchTransferList />}
						/>
						<Route path='/returnParcelList' element={<ReturnParcelList />} />
						<Route
							path='/generateReturnRiderRun'
							element={<GenerateReturnRiderRun />}
						/>
						<Route
							path='/returnRiderRunList'
							element={<ReturnRiderRunList />}
						/>
						<Route
							path='/receivedReturnTransferList'
							element={<ReceivedReturnTransferList />}
						/>
						<Route path='/parcelBooking' element={<NewParcelBooking />} />
						<Route path='/bookingParcelList' element={<BookingParcelList />} />
						<Route
							path='/bookingParcelVehicle'
							element={<BookingParcelAssignVehicle />}
						/>
						<Route
							path='/bookingParcelReceiveList'
							element={<BookingParcelReceiveList />}
						/>
						<Route
							path='/receiveBookingParcel'
							element={<ReceiveBookingParcel />}
						/>
						<Route path='/parcelPaymentList' element={<ParcelPaymentList />} />
						<Route path='/paymentForward' element={<PaymentForwardToAcc />} />
						<Route
							path='/parcelPaymentReport'
							element={<ParcelPaymentReport />}
						/>
						<Route path='/vehicle' element={<Vehicle />} />
						<Route path='/warehouse' element={<Warehouse />} />
						<Route path='/itemCategory' element={<ItemCategory />} />
						<Route path='/item' element={<Item />} />
						<Route path='/orderTracking' element={<OrderTracking />} />
						<Route path='/marchentList' element={<MarchantList />} />
						<Route path='/riderList' element={<RiderList />} />
					</Routes>
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
