import styled from 'styled-components'

export const ProductsContainer = styled.div`
    width: 100%; 
    min-height: 100vh;
    padding: 5rem calc({100vw - 1300px} /2);
    background: #150f0f;
    color: #fff;

    @media screen and (max-width: 320px) {
      width: 100%;
      height: 390vh;
    }

    @media screen and (min-width: 321px) and (max-width: 375px) {
      width: 100%;
      height: 345vh;
    }

    @media screen and (min-width: 376px) and (max-width: 425px) {
      width: 100%;
      height: 345vh;
    }

    @media screen and (min-width: 426px) and (max-width: 768px) {
      width: 100%;
      height: 205vh;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      width: 100%;
      height: 120vh;
    }
    
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    height: 120vh;
`;

export const ProductCard = styled.div`
   margin: 0 2rem;
   line-height: 2;
   width: 300px;
`;

export const ProductImg = styled.img`
   height: 350px;
   min-weight: 300px;
   max-width: 100%;
   box-shadow: 8px 8px #fdc500;

   @media screen and (max-width: 320px) {
      margin-top: 20px;
   }

   @media screen and (min-width: 321px) and (max-width: 375px) {
      margin-top: 20px;
   }

   @media screen and (min-width: 376px) and (max-width: 425px) {
      margin-top: 20px;
   }

   @media screen and (min-width: 426px) and (max-width: 768px) {
      margin-top: 20px;
   }

   @media screen and (min-width: 769px) and (max-width: 1024px) {
      margin-top: 20px;
   }
`;

export const ProductsHeading = styled.h1`
   font-size: clamp(2rem, 2.5vw, 3rem);
   text-align: center;
   margin-bottom: 5rem;
   padding: 80px;

   @media screen and (max-width: 320px) {
      padding-top: 120px;
   }

   @media screen and (min-width: 321px) and (max-width: 375px) {
      padding-top: 120px;
   }

   @media screen and (min-width: 376px) and (max-width: 425px) {
      padding-top: 120px;
   }

   @media screen and (min-width: 426px) and (max-width: 768px) {
      padding-top: 150px;
   }

   @media screen and (min-width: 769px) and (max-width: 1024px) {
      padding-top: 150px;
   }
`;

export const ProductTitle = styled.h2`
   font-weight: 400;
   font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 2rem;
   text-align: center;
`;

export const ProductDesc = styled.p`
   margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
   margin-bottom: 1rem;
   font-size: 2rem;
`;

export const ProductButton = styled.button`
   font-size: 1rem;
   padding: 1rem 4rem;
   border: none;
   background: #e31837;
   color: #fff;
   transition: 0.2 ease-out;

   &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
   }
`;
