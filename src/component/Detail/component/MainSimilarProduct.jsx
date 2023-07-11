import FooterContent from "../../Detail/component/FooterContent";
import HeaderContent from "../../Detail/component/HeaderContent";

const MainSimilarProduct = () => {
    return (
        <div className="mt-[60px] flex justify-center pb-[40px] border-b-[4px] border-solid border-[#CCCC]">
            <div>
                <HeaderContent title={"Sản phẩm tương tự"} />
                <div className="px-[60px] flex justify-center flex-wrap">
                    <FooterContent />
                    <FooterContent />
                    <FooterContent />
                    <FooterContent />
                </div>
            </div>
        </div>
    );
}

export default MainSimilarProduct;