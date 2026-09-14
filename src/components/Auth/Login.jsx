import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
        
    }



  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0b0b0c] px-4">

      {/* Subtle background lighting */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c9c0b4]/[0.045] blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#aaa096]/[0.025] blur-[120px]" />

      {/* Login Card */}
      <div className="relative w-full max-w-[390px] rounded-[28px] border border-[#b9b0a5]/[0.16] bg-[#151516]/80 px-8 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:px-10">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[#e8e4df]">
            Login
          </h1>

          <p className="mt-2 text-[13px] text-[#a8a098]">
            Enter your employee credentials to continue
          </p>
        </div>

        {/* Form */}
        <form
        onSubmit={(e) =>{
            submitHandler(e)
        }}
         className="flex flex-col gap-5 " 
         autoComplete='off'>

          {/* Email */}
          <div>
            <label className="mb-2 block text-[13px] font-medium tracking-[-0.01em] text-[#d5d0ca]">
              Email address
            </label>

            <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
               autoComplete="off"
              type="email"
              placeholder="Enter your email address"
              className="h-12 w-full rounded-xl border border-[#b9b0a5]/[0.14] bg-[#0d0d0e]/60 px-4 text-[13px] text-[#e8e4df] outline-none placeholder:text-[#817b74] transition duration-300 focus:border-[#c9c0b4]/50 focus:bg-[#111112] focus:ring-4 focus:ring-[#c9c0b4]/[0.04]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-[13px] font-medium tracking-[-0.01em] text-[#d5d0ca]">
              Password
            </label>

            <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
             autoComplete="off"
              type="password"
              placeholder="Enter your password"
              className="h-12 w-full rounded-xl border border-[#b9b0a5]/[0.14] bg-[#0d0d0e]/60 px-4 text-[13px] text-[#e8e4df] outline-none placeholder:text-[#817b74] transition duration-300 focus:border-[#c9c0b4]/50 focus:bg-[#111112] focus:ring-4 focus:ring-[#c9c0b4]/[0.04]"
            />
          </div>

          {/* Forgot Password */}
          <div className="-mt-2 text-right">
            <button
              type="button"
              className="text-[12px] text-[#a8a098] transition duration-300 hover:text-[#e5dfd7]"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="h-12 rounded-xl bg-[#e7e1d8] text-[13px] font-semibold tracking-[-0.01em] text-[#1b1917] transition duration-300 hover:bg-[#f0ebe4] active:scale-[0.99]"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  )
}

export default Login