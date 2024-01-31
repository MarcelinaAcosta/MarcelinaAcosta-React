import React from 'react'
import { app } from '../data/FirebaseConfig';
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
        return (
        <div className={className} style={{...style, display: "flex", background: "#000", height: "50px", width:"35px", alignItems:"center", paddingLeft:"10px", marginRight:"20px"}} onClick={onClick}></div>)
      }
      function  SamplePrevArrow(props) {
        const {className, style,  onClick} = props;
        return(
          <div className={className} style={{...style, display: "flex", background: "#000", height: "50px", width:"35px", alignItems:"center", paddingLeft:"10px", marginLeft:"20px", zIndex:"999"}} onClick={onClick}></div>
        )
      }

 function ContainerSlideFeatured() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const [products, setProducts] = useState([]);
  
      useEffect(() => {
        const fetchData = async () => {
          const db = getFirestore(app);
          const productsCollection = collection(db, 'Destacados');
          try {
            const respuesta = await getDocs(productsCollection);
            const productsData = respuesta.docs.map((doc) => {
              const id = doc.id;
              const data = doc.data();
              const product = { id, ...data };
              return product;
            });
            setProducts(productsData);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);
  
  return (
  <div>
          {products && products.length > 0 && (
        <div>
    
        <h2 className='titleSlideFeatured'> Destacados</h2>
          <Slider className="SliderContainerFeatured"  {...settings}>
              {products.map((product) => (
                <div className='containerFeatured'>
                   <div className='cardSliderFeatured'  key={product.id}>
                    <img src={product.img} ></img>
                    </div>
                   <div className='cardNamePriceStock'>{product.name}</div>
                  <div className='cardNamePriceStock'><b>{product.price}</b></div>
                 
                  <div className='cardNamePriceStock'>{product.stock}</div> 
                  <div className='ContainerButtonSlideFeatured'>
                      <button  className='ButtonSlideFeatured'>Comprar</button>
                      
                      <button className='ButtonSlideFeatured' id='ButtonFeaturedSeeMore'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480.235-364Q537-364 576.5-403.735q39.5-39.736 39.5-96.5Q616-557 576.265-596.5q-39.736-39.5-96.5-39.5Q423-636 383.5-596.265q-39.5 39.736-39.5 96.5Q344-443 383.735-403.5q39.736 39.5 96.5 39.5ZM480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm.143 140Q355-252 252-319.5T96-500q53-113 155.857-180.5t228-67.5Q605-748 708-680.5T864-500q-53 113-155.857 180.5t-228 67.5ZM480-500Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>Ver</button>
                    </div>
                  </div> 
              ))}
               </Slider>
               </div>

  )
              }
              </div>
  )}
export default ContainerSlideFeatured
