import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import {Container, createStyles, rem, Title} from "@mantine/core";
import CategoriesCard from "@/components/CategoriesCard";
import MotherboardIcon from "@/assets/categories/motherboard.png";
import RamIcon from "@/assets/categories/ram.png";
import CpuIcon from "@/assets/categories/cpu.png";
import PsuIcon from "@/assets/categories/psu.png";
import HddIcon from "@/assets/categories/hdd.png";
import MonitorIcon from "@/assets/categories/monitor.png";
import GpuIcon from "@/assets/categories/gpu.png";

import 'swiper/css';
import 'swiper/css/pagination';

const useStyles = createStyles((theme) => ({
   title: {
      fontSize: rem(34),
      fontWeight: 900,

      [theme.fn.smallerThan('sm')]: {
         fontSize: rem(24),
      },
   },

   description: {
      maxWidth: 600,
      margin: 'auto',

      '&::after': {
         content: '""',
         display: 'block',
         backgroundColor: theme.fn.primaryColor(),
         width: rem(45),
         height: rem(2),
         marginTop: theme.spacing.sm,
         marginLeft: 'auto',
         marginRight: 'auto',
      },
   },

   card: {
      border: `${rem(1)} solid ${
         theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
   },

   cardTitle: {
      '&::after': {
         content: '""',
         display: 'block',
         backgroundColor: theme.fn.primaryColor(),
         width: rem(45),
         height: rem(2),
         marginTop: theme.spacing.sm,
      },
   },
}));

const categories = [
   {
      icon: CpuIcon,
      title: 'CPU / Processor',
   },
   {
      icon: MotherboardIcon,
      title: 'Motherboard',
   },
   {
      icon: RamIcon,
      title: 'RAM',
   },
   {
      icon: PsuIcon,
      title: 'Power Supply Unit',
   },
   {
      icon: HddIcon,
      title: 'Storage Device',
   },
   {
      icon: MonitorIcon,
      title: 'Monitor',
   },
   {
      icon: GpuIcon,
      title: 'Other',
   },
];

const CategoriesSection = () => {
   const {classes} = useStyles();

   return (
      <Container size="lg" py='2.5rem'>
         <Title mb={50} order={2} className={classes.title} ta="center" mt="sm">
            Featured Products
         </Title>

         <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
               },
               1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
               },
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            {
               categories.map((item, index) => (
                  <SwiperSlide key={index}>
                     <CategoriesCard item={item}/>
                  </SwiperSlide>
               ))
            }
         </Swiper>
      </Container>
   );
};

export default CategoriesSection;