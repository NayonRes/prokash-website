import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Platform from "./Platform";
import Test from "../Test";
import AboutUs from "./AboutUs";
import FintechSoftwareDevelopment from "./FintechSoftwareDevelopment";
import EWalletAppDevelopment from "./EWalletAppDevelopment";
import P2PDevelopment from "./P2PDevelopment";
import StartUp from "./StartUp";
import SMB from "./SMB";
import Enterprise from "./Enterprise";
import PaymentSolutionProvider from "./PaymentSolutionProvider";
import DigitalWalletSolution from "./DigitalWalletSolution";
import MobileMoneyProcessing from "./MobileMoneyProcessing";
import EWallet from "./EWallet";
import GeneralLedger from "./GeneralLedger";
import MobileWallet from "./MobileWallet";
import MoneyTransfer from "./MoneyTransfer";
import NeoBank from "./NeoBank";
import PaymentAcceptance from "./PaymentAcceptance";
import UseCases from "./UseCases";
import TermsAndConditions from "./TermsAndConditions";

const Navigation = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/services/fintech-software-development"
          element={<FintechSoftwareDevelopment />}
        />
        <Route
          path="/services/ewallet-app-development"
          element={<EWalletAppDevelopment />}
        />
        <Route path="/services/p2p-development" element={<P2PDevelopment />} />
        <Route path="/startup" element={<StartUp />} />
        <Route path="/small-and-medium-sized-business" element={<SMB />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route
          path="/case-studies/payment-solution-provider"
          element={<PaymentSolutionProvider />}
        />
        <Route
          path="/case-studies/digital-wallet-solution"
          element={<DigitalWalletSolution />}
        />
        <Route
          path="/case-studies/mobile-money-processing"
          element={<MobileMoneyProcessing />}
        />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/use-cases/e-wallet" element={<EWallet />} />
        <Route path="/use-cases/general-ledger" element={<GeneralLedger />} />
        <Route path="/use-cases/mobile-wallet" element={<MobileWallet />} />
        <Route path="/use-cases/money-transfer" element={<MoneyTransfer />} />
        <Route path="/use-cases/neobank" element={<NeoBank />} />
        <Route
          path="/use-cases/payment-acceptance"
          element={<PaymentAcceptance />}
        />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default Navigation;
