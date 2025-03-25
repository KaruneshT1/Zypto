import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"; // Import MainLayout
import AuthLayout from "../layouts/AuthLayout"; // Import AuthLayout
import HomePage from "../pages/HomePage"; // Import HomePage
import SearchPage from "../pages/SearchPage"; // Import SearchPage
import SignInPage from "../pages/SignInPage"; // Import SignInPage
import SignUpPage from "../pages/SignUpPage"; // Import SignUpPage
import TermsAndConditions from "../pages/TermsAndConditions"; // Import TermsAndConditions
import FAQPage from "../pages/FAQPage"; // Import FAQPage

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Main Layout Routes */}
      <Route 
        path="/" 
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } 
      />
      <Route 
        path="/search" 
        element={
          <MainLayout>
            <SearchPage />
          </MainLayout>
        } 
      />
      <Route 
        path="/terms-and-conditions" 
        element={
          <MainLayout>
            <TermsAndConditions />
          </MainLayout>
        } 
      />
      <Route 
        path="/faq" 
        element={
          <MainLayout>
            <FAQPage />
          </MainLayout>
        } 
      />
      
      {/* Auth Layout Routes */}
      <Route 
        path="/sign-in" 
        element={
          <AuthLayout>
            <SignInPage />
          </AuthLayout>
        } 
      />
      <Route 
        path="/sign-up" 
        element={
          <AuthLayout>
            <SignUpPage />
          </AuthLayout>
        } 
      />
    </Routes>
  );
};

export default RoutesConfig;
