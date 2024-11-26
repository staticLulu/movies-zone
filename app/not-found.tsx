import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-screen grid justify-self-center items-center'>
      <div className='h-[300px] w-[500px] bg-[#FEF3E2] rounded-lg p-5 shadow-sm'>
        <h1 className='text-3xl text-center font-semibold text-[#FA4032]'>Not found - 404!</h1>
        <Link 
          href="/" 
          className='
            flex 
            justify-self-center 
            border 
            border-[#FAB12F]/50 
            w-fit 
            mt-20 
            p-4 
            rounded-lg
            text-xl
            text-[#FAB12F]
            hover:text-[#FAB12F]/50
          '
        >
          Go back to Home 🔙
        </Link>
      </div>
    </div>
  )
}