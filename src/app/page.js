import React from "react";
import Image from "next/image";
import ExploreIcon from "@mui/icons-material/Explore";
import { AddCircleRounded, AddCircleSharp, Menu, Notifications, Search } from "@mui/icons-material";

export default function Home() {
  return (
    <main className="grid gap-y-7">
      {/* navbar */}

      <section className="flex items-center h-[80px] px-2 py-6 md:px-24 md:py-[10px] justify-between md:gap-x-16">
  <Image
    src="/HobbyCue Logo.png"
    alt="HobbyCue Logo"
    width={290}
    height={60}
    priority
  />
  <div className="hidden md:flex items-center border border-[#EBEDF0] rounded-[8px] overflow-hidden md:w-[300px] h-[40px]">
    <input
      type="text"
      placeholder="Search here..."
      className="p-4 w-full focus:outline-none text-[12px] font-light bg-[#F8F9FA]"
    />
    <div className="bg-[#8064A2] w-[40px] h-[40px] flex items-center justify-center">
      <Search className="text-white w-[16px] h-[16px]" />
    </div>
  </div>
  <div className="hidden md:flex gap-x-6 items-center">
    <div className="flex gap-x-1">
      <ExploreIcon className="text-[#8064A2]" />
      <p>Explore</p>
    </div>
    <div className="flex gap-x-1">
      <Image
        src="/Hobbies.png"
        alt="Hobbies Logo"
        width={24}
        height={24}
      />
      <p>Hobbies</p>
    </div>
    <Image
      src="/bookmark.png"
      alt="bookmark icon"
      width={24}
      height={24}
    />
    <Image
      src="/notifications.png"
      alt="notification icon"
      width={24}
      height={24}
    />
    <Image
      src="/product 3.png"
      alt="cart icon"
      width={24}
      height={24}
    />
    <button className="border border-[#8064A2] text-[#8064A2] font-semibold pb-4 pt-2 px-8 rounded-[8px] w-[125px] h-[40px] text-[14px] text-center">
      Sign In
    </button>
  </div>
  <div className="flex md:hidden gap-x-4 items-center">
  <Search className="text-[#8064A2] w-6 h-6" />
    <Image
      src="/notifications.png"
      alt="notification icon"
      width={24}
      height={24}
    />
    <Menu className="text-[#8064A2] w-6 h-6" />
  </div>
</section>

      {/* Hero */}
      <section className="bg-[#F7F5F9]  px-2 py-6 md:px-24 md:py-16 flex flex-col gap-y-6 md:gap-y-24 md:flex-row md:gap-x-24">
  <div className="w-[312px] md:w-3/5 flex flex-col gap-y-12">
    <div className="flex flex-col gap-y-4">
      <h1 className="font-semibold italic text-[18px] leading-[27px] tracking-[0.02em] pb-4 md:text-[36px] md:leading-[54px]">
        Explore your <span className="text-[#0096C8]">hobby</span> or <span className="text-[#8064A2]">passion</span>
      </h1>
      <p className="grid md:hidden font-light text-[12px] leading-[22px] tracking-[0.02em]">
        Sign-in to interact with a community of fellow hobbyists and an ecosystem of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
      </p>
      <div className="hidden md:grid gap-y-4">
        <p className="font-light text-sm leading-[20px] tracking-[0.02em] md:text-base md:leading-[30px]">
          Sign-in to interact with a community of fellow hobbyists and an ecosystem of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
        </p>
        <p className="font-light text-sm leading-[20px] tracking-[0.02em] pb-20 md:text-base md:leading-[30px]">
          If you are an expert or a seller, you can add your listing and promote yourself, your students, products, services, or events. Hop on your hobbyhorse and enjoy the ride.
        </p>
      </div>
    </div>
    <div className="hidden md:flex">
      <Image
        src="/Group 27.png"
        alt="group"
        width={697}
        height={216}
      />
    </div>
  </div>

  {/* Form */}
  <div className="w-[312px] h-[364px] md:w-2/5 flex flex-col gap-y-8 pt-8 md:pt-0">
    <div className="flex gap-x-8  md:justify-center">
      <p className="text-[#8064A2] border-b border-[#8064A2]">Sign In</p>
      <p className="text-[#939CA3]">Join In</p>
    </div>
    <div>
      <div className="flex flex-col gap-y-4">
        <button className="border border-[#8064A2] py-2 px-4 rounded-[8px] flex items-center gap-x-16 text-sm w-full h-[32px]">
          <Image
            src="/Group (3).png"
            alt="facebook icon"
            width={16}
            height={16}
          />
          Connect with Facebook
        </button>
        <button className="h-[32px] bg-[#F7F5F9] border border-[#8064A2] py-2 px-4 rounded-[8px] flex items-center gap-x-16 text-sm">
          <Image
            src="/Google.png"
            alt="google icon"
            width={16}
            height={16}
          />
          Connect with Google
        </button>
      </div>

      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">Or connect with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <form className="flex flex-col gap-y-4">
        <input type="email" placeholder="Email" className=" h-[32px] p-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#8064A2]" />
        <input type="password" placeholder="Password" className=" h-[32px] p-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#8064A2]" />
        <div className="flex items-center justify-between pb-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-[#8064A2]" />
            <span className="ml-2 text-[12px]">Remember me</span>
          </label>
          <a href="#" className="text-[12px] hover:underline">Forgot password?</a>
        </div>
        <button type="submit" className=" h-[32px] border border-[#000000] py-2 px-4 rounded-[8px]">Continue</button>
      </form>
    </div>
  </div>

  <div className="md:hidden">
    <Image
      src="/Group 27.png"
      alt="group"
      width={312}
      height={216}
    />
  </div>
</section>


      <section className="px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" w-[312px] md:w-[608px] h-[297px] border border-[#CED4DA] px-[44px] py-10 grid gap-y-7 rounded-[8px]">
            <div className="flex gap-x-6">

              <Image
                src="/groups.svg"
                alt="group"
                width={40}
                height={20}
              />
              <p className="font-semibold text-[24px] leading-[36px]">People</p>
            </div>
            <p className="font-light  text-[12px] md:text-[18px] leading-[27px]">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
            <button type="submit" className="border border-[#8064A2] text-[#8064A2] py-2 px-4 rounded-[8px] w-[122px] h-[40px]">Connect</button>

          </div>
          <div className="w-[608px] h-[297px] border border-[#CED4DA] px-[44px] py-10 grid gap-y-7 rounded-[8px]">
            <div className="flex gap-x-6">

              <Image
                src="/location.svg"
                alt="group"
                width={40}
                height={20}
              />
              <p className="font-semibold text-[24px] leading-[36px]">Place</p>
            </div>
            <p className="font-light  text-[12px] md:text-[18px] leading-[27px]">
              Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
            </p>
            <button type="submit" className="border border-[#8064A2] text-[#8064A2] py-2 px-4 rounded-[8px] w-[122px] h-[40px]">Meet up</button>

          </div>
          <div className="w-[608px] h-[297px] border border-[#CED4DA] px-[44px] py-10 grid gap-y-7 rounded-[8px]">
            <div className="flex gap-x-6">

              <Image
                src="/shopping_basket.svg"
                alt="group"
                width={40}
                height={20}
              />
              <p className="font-semibold text-[24px] leading-[36px]">Product</p>
            </div>
            <p className="font-light  text-[12px] md:text-[18px] leading-[27px]">
              Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
            </p>
            <button type="submit" className="border border-[#8064A2] text-[#8064A2] py-2 px-4 rounded-[8px] w-[122px] h-[40px]">Get it</button>

          </div>
          <div className="w-[608px] h-[297px] border border-[#CED4DA] px-[44px] py-10 grid gap-y-7 rounded-[8px]">
            <div className="flex gap-x-6">

              <Image
                src="/event.svg"
                alt="group"
                width={40}
                height={20}
              />
              <p className="font-semibold text-[24px] leading-[36px]">Program</p>
            </div>
            <p className="font-light  text-[12px] md:text-[18px] leading-[27px]">
              Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
            </p>
            <button type="submit" className="border border-[#8064A2] text-[#8064A2] py-2 px-4 rounded-[8px] w-[122px] h-[40px]">Attend</button>

          </div>
        </div>
      </section>

      <section className="bg-[#F7FDFF] p-24 h-[484px]">
        <div className="border border-[#CED4DA] bg-white p-[40px] grid gap-y-6 max-[1240px] h-[284px]">
          <div className="flex gap-x-6 items-center">

            <Image
              src="/Add.svg"
              alt="group"
              width={40}
              height={40}
            />
            <p className="font-semibold text-[24px] leading-[36px] text-[#08090A]">Add your own</p>
          </div>
          <p className="font-light text-sm md:text-[18px] leading-[30px] tracking-[0.2em] text-[#08090A]">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
          <button type="submit" className="border border-[#8064A2] text-[#8064A2] py-2 px-4 rounded-[8px] w-[122px] h-[40px]">Add new</button>

        </div>
      </section>
      <section className="p-24 h-[672px]">
        <div className="border border-[#CED4DA] bg-[#F7F5F9] p-[40px] grid gap-y-6 max-[1240px] h-[472px]">
          <div className="flex gap-x-6 items-center">

            <Image
              src="/quote.svg"
              alt="group"
              width={40}
              height={40}
            />
            <p className="font-semibold text-[24px] leading-[36px] text-[#08090A]">Testimonials</p>
          </div>
          <p className="font-light text-sm md:text-[18px] leading-[30px] tracking-[0.1em] text-[#6D747A] w-[1160px] h-[180px]">
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
          <div className="flex gap-x-6 items-center">
            <Image
              src="/Audio Track.svg"
              alt="group"
              width={776}
              height={100}
            />
            <div className="flex gap-x-6 justify-items-center">
              <Image
                src="/Ellipse 12.svg"
                alt="group"
                width={100}
                height={100}
              />
              <div>
                <p className="font-semibold text-sm md:text-[18px] leading-[27px] tracking-[0.2em] text-[#8064A2]">Shubha Nagarajan</p>
                <p className="font-normal text-sm leading-[21px] tracking-[0.2em] text-[#0096C8]">Classical Dancer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7FDFF] p-24 grid gap-y-24">
        <div className="grid gap-y-8">

          <p className="font-medium italic text-md text-[36px] leading-[54px] ">Your <span className="text-[#8064A2]">Hobby</span>, Your <span className="text-[#0096C8]">Community...</span></p>
          <button type="submit" className="bg-[#8064A2] text-white py-2 px-4 rounded-[8px] w-[147px] h-[40px]">Get started</button>
        </div>

        <Image
          src="/Group 99.svg"
          alt="group"
          width={1240}
          height={302}
        />
      </section>
      {/* footer */}
      <section className="px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <div className="grid gap-y-[16px]">
            <h5 className="font-bold leading-[18px] text-sm">Hobbycue</h5>
            <ul className="grid gap-y-2">
              <li className="font-normal text-sm text-[#08090A]">About Us</li>
              <li className="font-normal text-sm text-[#08090A]">Our Services</li>
              <li className="font-normal text-sm text-[#08090A]">Work with Us</li>
              <li className="font-normal text-sm text-[#08090A]">FAQ</li>
              <li className="font-normal text-sm text-[#08090A]">Contact Us</li>
            </ul>
          </div>
          <div className="grid gap-y-[16px]">
            <h5 className="font-bold leading-[18px] text-sm">How Do I</h5>
            <ul className="grid gap-y-2">
              <li className="font-normal text-sm text-[#08090A]">Sign Up</li>
              <li className="font-normal text-sm text-[#08090A]">Add a Listing</li>
              <li className="font-normal text-sm text-[#08090A]">Claim Listing</li>
              <li className="font-normal text-sm text-[#08090A]">Post a Query</li>
              <li className="font-normal text-sm text-[#08090A]">Add a Blog Post</li>
              <li className="font-normal text-sm text-[#08090A]">Other Queries</li>
            </ul>
          </div>
          <div className="grid gap-y-[16px]">
            <h5 className="font-bold leading-[18px] text-sm">Quick Links</h5>
            <ul className="grid gap-y-2 text-red">
              <li className="font-normal text-sm text-[#08090A]">Listings</li>
              <li className="font-normal text-sm text-[#08090A]">Blogs Posts</li>
              <li className="font-normal text-sm text-[#08090A]">Shop / Store</li>
              <li className="font-normal text-sm text-[#08090A]">Community</li>

            </ul>
          </div>
          <div className="grid gap-y-[16px]">
            <h5 className="font-bold leading-[18px] text-sm">Social Media</h5>
            <div className="flex pb-[50px] gap-x-[24px]">
              <Image
                src="/Group 56.svg"
                alt="group"
                width={24}
                height={24}
              />
              <Image
                src="/Group 57.svg"
                alt="group"
                width={24}
                height={24}
              />
              <Image
                src="/Group 58.svg"
                alt="group"
                width={24}
                height={24}
              />
              <Image
                src="/Group 59.svg"
                alt="group"
                width={24}
                height={24}
              />
              <Image
                src="/Group 60.svg"
                alt="group"
                width={24}
                height={24}
              />
              <Image
                src="/Group 61.svg"
                alt="group"
                width={24}
                height={24}
              />
              <Image
                src="/Group 62.svg"
                alt="group"
                width={24}
                height={24}
              />
              <Image
                src="/Group 63.svg"
                alt="group"
                width={24}
                height={24}
              />
            </div>
            <p className="font-bold leading-[18px] text-sm">Invite Friends</p>

            <div className="flex items-center border border-[#EBEDF0] rounded-[8px] overflow-hidden w-[300px] h-[40px]">
          <input
            type="text"
            placeholder="Email ID"
            className="p-4 w-full focus:outline-none text-[12px] font-light bg-[#F8F9FA]"
          />
          <div className="bg-[#8064A2] w-[59px] h-[40px] flex items-center justify-center">
            <span className="text-white text-[12px] p-[12px]">Invite </span>
          </div>
        </div>
          </div>
        </div>
      </section>
      <div className="bg-[#f7f5f9] py-[30px]">
        <p className="text-sm text-[#08090A] font-medium text-center">© Purple Cues Private Limited</p>
      </div>
    </main>
  );
}
