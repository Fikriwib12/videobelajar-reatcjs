import Navbar from "./components/Navbar";
import { useState } from "react";
import FormHeader from "./components/FormHeader";
import InputField from "./components/InputField";
import PasswordInput from "./components/PasswordInput";
import PhoneInput from "./components/PhoneInput";
import AuthButtons from "./components/AuthButtons";
import SocialLogin from "./components/SocialLogin";

function App() {
  const [showPassword, setShowpassword] = useState(false);
  const [showConfirmPassword, setConfrimPassword] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <main>
        <form
          action=""
          className="bg-white md:mt-16 mt-5 md:w-147.5 w-[90vw] mx-auto border border-[#F1F1F1] md:p-9 p-5 rounded-sm mb-3"
        >
          <FormHeader
            title="Pendaftaran Akun"
            subtitle="Yuk, daftarkan akunmu sekarang juga!"
          />
          <div className="input-group flex flex-col">
            <InputField label="Nama Lengkap" type="text" id="name" />
            <InputField label="Email" type="email" id="email" />
            <PhoneInput />
            <PasswordInput
              label="Kata Sandi"
              id="password"
              showPassword={showPassword}
              onToggle={() => setShowpassword(!showPassword)}
            />
            <PasswordInput
              label="Konfirmasi Kata Sandi"
              id="confirmPassword"
              showPassword={showConfirmPassword}
              onToggle={() => setConfrimPassword(!showConfirmPassword)}
            />
            <AuthButtons />
            <SocialLogin buttonText="Daftar Dengan Google" />
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
