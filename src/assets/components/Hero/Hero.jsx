const Hero = () => {
  return (
    <>
      <section className="max-w-[1600px] lg:w-[82%] w-[98%] mx-auto mt-4 lg:mt-6">
        <div
          className="hero rounded-3xl"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="hero-overlay  bg-opacity-40 rounded-3xl"></div>
          <div className="hero-content text-center text-neutral-content py-10 lg:py-32">
            <div className="lg:max-w-[70%] items-center flex flex-col">
              <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">
                Welcome To The World Class Best Kitchen In Istanbul, Turkey.
              </h1>
              <p className="mb-5 text-white">
                You just place an order and we instantly cook this item. After
                cooking we serve this hot dish to you. You can modify
                ingredients, If you want. Thank you.
              </p>
              <div className="flex gap-5">
                <button className=" bg-[#0BE58A] lg:px-7 px-3 rounded-full py-1 lg:py-4 text-[#150B2B] text-xl font-semibold">
                  Explore Now
                </button>
                <button className="border-2 lg:px-7 px-3 rounded-full py-1 lg:py-4 text-[#FFFFFF] font-semibold text-xl">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
