import type React from "react"
import type { JSX } from "react"

const OrderStatus: React.FC = (): JSX.Element => {
  return (
    <section className="py-1 text-center text-white bg-primary-600 flex justify-center items-center gap-2">
      <div className="rounded-full size-5 bg-green-400/50 flex items-center justify-center animate-pulse duration-75">
        <span className="rounded-full size-3  bg-green-400"></span>
      </div>
      <h6 className="text-[12px] font-bold">سفارش میپذیریم</h6>
    </section>
  )
}

export default OrderStatus
