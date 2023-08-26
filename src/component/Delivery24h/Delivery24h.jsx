import Footer from "../Footer/Footer";
import delivery24h from "../../data/img/delivery24h.png";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import LayOut from "../LayOut/LayOut";

const Delivery24h = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <LayOut />
      <ButtonSearch />
      <div className="w-4/5 ">
        <div className="flex space-x-3 place-content-center mt-[40px]">
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>

          <div>
            <h1 className="text-center text-4xl ">Vận chuyển 24h</h1>{" "}
          </div>
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>
        </div>
        <div className=" mt-10   flex justify-center	 ">
          <img className="w-full" src={delivery24h} alt="imgMap" />
        </div>
        <p className="text-justify mt-10 text-[20px]">
          SVN LOGISTICS sở hữu đội ngũ xe tải đa dạng với nhiều tải trọng và
          kích cỡ, đáp ứng mọi nhu cầu vận chuyển hàng hóa của khách hàng. Dịch
          vụ Door to Door chuyên nghiệp, đưa hàng hóa tận tay khách hàng, chuyển
          nhà ở hoặc văn phòng một cách thuận tiện và tin cậy. Chúng tôi luôn
          tuân thủ đúng hẹn và sẵn sàng đáp ứng mọi yêu cầu vận chuyển của quý
          khách trong mọi khung giờ. 
        </p>
      </div>
      <div className="w-[800px] h-[2px] bg-black rounded-md mt-20 " />

      <Footer />
    </div>
  );
};
export default Delivery24h;
