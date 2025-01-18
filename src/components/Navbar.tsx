export default function Navbar() {
  return (
    <div className="max-ss:w-[410px] w-[1440px] ">
      <div className=" bg-[#f5f5f5]  h-9 w-[1490px] max-sm:w-auto flex">
        <div className="ml-12 max-ss:ml-[5px] ">
        <img
          className="pt-2"
          src={"/Vector3x.png"}
          alt=""
          width={24}
          height={24}
        />
        </div>

        <div className="max-md:ml-2 max-ss:ml-[27px] max-sm:mb-1 w-[272px] h-[36px] text-[11px] font-medium  justify-between ml-[1022px] py-2  flex  ">
          <a className="relative left-[45px] mb-4  " href="/all-product-page">
            Find a store |
          </a>
          <a className="relative left-[45px] " href="/contact">
            Help |
          </a>
          <a className="relative left-[45px]  " href="/join-us">
            Join Us |
          </a>
          <a className="relative left-[45px]  " href="/sign-in">
            Sign In 
          </a>
        </div>
      </div>

      <div className="w-[1440px] h-[60px] flex mt-4 ">
      <a className="relative left-[45px] max-ss:ml-[78px]  " href="/">

        <img
          className=" "
          src={"/Vector8.png"}
          alt=""
          width={78.47}
          height={78.47}
        />
                    </a>

        <div className="max-md:hidden w-[1211px] max-ss:hidden h-[36px]  ml-[210px] items-center  justify-between flex ">
          <div className="max-ss:hidden w-[272px] h-[36px] gap-6  justify-between flex  relative left-[107px] ">
            <a className="relative left-[45px]  " href="/all-product-page">
              {" "}
              New.&.Featured
            </a>
            <a className="relative left-[45px] " href="/all-product-page">
              Men
            </a>
            <a className="relative left-[45px]  " href="/all-product-page">
              Women
            </a>
            <a className="relative left-[45px]  " href="/all-product-page">
              kids
            </a>
            <a className="relative left-[45px]  " href="/SignUp">
              Sale
            </a>
            <a className="relative left-[45px]  " href="/SignUp">
              SNKRS
            </a>
          </div>
          <div className="max-ss:hidden w-[180px] h-[40px] relative left-5 flex ml-[320px] bg-[#f5f5f5] rounded-[10px] ">

            <img
              className="pt-[10px] pl-[10px] w-[1390px] max-ss:w-[310px] "
              src={"/Vector10.png"}
              alt=""
              width={24}
              height={24}
            />

            <input className="ml-7 bg-[#f5f5f5] rounded-[10px]" placeholder="Search" />
          </div>
          <img
            className="max-ss:hidden  relative left-5"
            src={"/Vector.png"}
            alt=""
            width={24}
            height={24}
          />
          <img
            className="max-ss:hidden relative ml-[-64px] "
            src={"/Vector (1).png"}
            alt=""
            width={24}
            height={24}
          />
        </div>

       
      </div>
    </div>
  );
}
