import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import TermsAndConditions from "../pages/TermsAndConditions";
import FAQPage from "../pages/FAQPage";
import AboutUsPage from "../pages/AboutUsPage"; // Import AboutUsPage

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
      <Route 
        path="/about-us" 
        element={
          <MainLayout>
            <AboutUsPage />
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
