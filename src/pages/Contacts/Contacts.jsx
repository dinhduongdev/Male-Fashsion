import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function IframeComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.764100539177!2d106.6880892107922!3d10.675409961004595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31753100099ce9ed%3A0xdb6079801f0735ea!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBN4bufIFRQLiBI4buTIENow60gTWluaCAoY8ahIHPhu58gMyk!5e0!3m2!1svi!2s!4v1706460262731!5m2!1svi!2s"
      width="100%"
      height="550"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <IframeComponent />
      <div className="container py-20">
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <p className="text-red-600 font-bold pb-5">INFORMATION </p>
            <div className="flex flex-col gap-5 pb-5">
              <h1 className="text-5xl">Contact Us</h1>
              <p>
                As you might expect of a company that began as a high-end
                interiors contractor, we pay strict attention.
              </p>
            </div>
            <div className="flex flex-col gap-5 pb-5">
              <h1 className="text-3xl">Ho Chi Minh city</h1>

              <p>Call: 0347163896</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between item">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="w-[45%] border-2 border-gray-400 rounded-md px-2 py-3 outline-none"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="w-[45%] border-2 border-gray-400 rounded-md px-2 py-3 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-2 border-gray-400 rounded-md  w-full h-[200px] px-2 py-3 outline-none"
                placeholder="Message"
              />
                      </div>
                      <div>
                          <button className="bg-black text-white py-3 px-8">SEND MESSAGE</button>
                      </div>
          </div>
        </div>
          </div>
          <Footer/>
    </div>
  );
};

export default Contacts;
