import Navbar from './components/Navbar'
import indoFlag from './assets/images/indoFlag.svg'
import logoGoogle from './assets/images/logo-google.svg'
import eye from './assets/images/eye-solid-full.svg'
import eyeSlash from './assets/images/eye-slash-solid-full.svg'
// import './App.css'

function App() {


  return (
    <>
     <Navbar></Navbar>
     <main>
      <form action="" className='bg-white mt-16 w-147.5 mx-auto border border-[#F1F1F1] p-9 rounded-sm'>
        <div className="form-header mb-9">
          <h3 className='font-[Poppins] font-semibold text-[32px] text-center'>Pendaftaran Akun</h3>
          <p className='font-[DM_Sans] text-center text-[#333333AD] text-[16px] font-bold'>Yuk, daftarkan akunmu sekarang juga!</p>
        </div>
        <div className="input-group flex flex-col">
          <label htmlFor="name" className='font-[poppins]'>Nama Lengkap <span className='text-red-500'>*</span></label>
          <input type="text" id='name' className='border border-[#3A35411F] w-full p-3 mb-4 rounded-md' />
          <label htmlFor="email" className='font-[poppins]'>Email <span className='text-red-500'>*</span></label>
          <input type="email" id='email' className='border border-[#3A35411F] w-full p-3 rounded-md mb-4' />
          <label htmlFor="noHp" className='font-[poppins]'>No Hp <span className='text-red-500'>*</span></label>
          <div className='flex gap-4 mb-4 w-full'>
            <div className='flex w-[30%]'>
              <div className='w-[60%] bg-slate-200 flex justify-center items-center rounded-tl-md rounded-bl-md'>
                <img src={indoFlag} alt="" className='object-cover' />
              </div>
             <select name="" id="" className='border border-[#3A35411F] w-full rounded-tr-md rounded-br-md p-3'>
            <option value="+62">+62</option>
            <option value="+80">+80</option>
            <option value="+92">+92</option>
          </select>
            </div>
         
          
          <input type="number" id='noHp' className='border border-[#3A35411F] w-full p-3 rounded-md '/>
          </div>
          <label htmlFor="password" className='font-[Poppins]'>Kata Sandi <span className='text-red-500'>*</span></label>
          <div className='relative'>
          <input type="password" name="password" id="password" className='border border-[#3A35411F] w-full p-3 rounded-md mb-4' />
          <img src={eyeSlash} alt="" className='w-6 absolute right-2 top-3' />
          </div>
          <label htmlFor="confirmPassword" className='font-[Poppins]'>Konfirmasi Kata Sandi <span className='text-red-500'>*</span></label>
          <input type="password" name="confirmPassword" id="confirmPassword" className='border border-[#3A35411F] w-full p-3 rounded-md mb-4' />
          <div className='text-right mb-6'>
            <a className='font-[DM_Sans] text-[#4A505C]'>Lupa Password?</a>
          </div>
          <button className='bg-[#3ecf4c] w-full p-3 font-[DM_Sans] font-bold text-white rounded-[10px] mb-4'>Daftar</button>
          <button className='bg-[#e2fcd9cc] w-full p-3 font-[DM_Sans] font-bold text-[#3ecf4c] rounded-[10px]'>Masuk</button>
          <div className='w-full flex justify-center items-center gap-3 my-6'>
            <span className='w-full h-0.5 bg-[#F1F1F1]'></span>
            <span>atau</span>
            <span className='w-full h-0.5 bg-[#F1F1F1]'> </span>
            </div>

          <button className=' flex justify-center items-center p-2 gap-2 rounded-[10px] border border-[#F1F1F1]'><img src={logoGoogle} alt="" /><span>Daftar Dengan Google</span></button>
        </div>
      </form>
     </main>
    </>
  )
}

export default App
