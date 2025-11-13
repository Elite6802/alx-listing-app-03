// pages/booking/index.tsx
import React from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <>
      <Head>
        <title>Booking - Villa Arrecife Beach House</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6">
            Complete Your Booking
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Booking Form */}
            <BookingForm />
            <CancellationPolicy />

            {/* Order Summary */}
            <OrderSummary bookingDetails={bookingDetails} />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
