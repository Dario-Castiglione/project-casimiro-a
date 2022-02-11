import style from "./CarouselHero.module.scss";
import ButtonHero from "../ButtonHero";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { setCarouselFirstInst, setCarouselIndex } from "../../store/actions";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SimpleCard from "../SimpleCard";

export default function CarouselHero({ data }) {

  const dispatch = useDispatch();
  const firstInst = useSelector((state) => state.carouselFirstInst);
  const secondInst = useSelector((state) => state.carouselSecondInst);

  function handlePrev() {
    firstInst.slidePrev(), secondInst.slidePrev();
    dispatch(setCarouselIndex(firstInst.realIndex));
  }
  function handleNext() {
    firstInst.slideNext(), secondInst.slideNext();
    dispatch(setCarouselIndex(firstInst.realIndex));
  }

  return (
    <>
      <div className={style.container}>
        <Swiper
          className={style.carousel}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          allowTouchMove={false}
          loop={true}
          speed={800}
          slidesPerView={2}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => dispatch(setCarouselFirstInst(swiper))}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={`citta/${slide.id}`}>
                <a>
                  <SimpleCard
                    big={true}
                    text={slide.name}
                    image={slide.cover_image_url}
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.button}>
          <ButtonHero dir="<" action={() => handlePrev()} />
          <ButtonHero dir=">" action={() => handleNext()} />
        </div>
      </div>
    </>
  );
}
