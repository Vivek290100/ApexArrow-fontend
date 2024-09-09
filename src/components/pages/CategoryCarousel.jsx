import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
    { name: "TATA", img: "src/assets/companyimgs/tata.png" },
    { name: "Google", img: "src/assets/companyimgs/google.png" },
    { name: "BMW", img: "src/assets/companyimgs/bmw.png" },
    { name: "Microsoft", img: "src/assets/companyimgs/microsoft.png" },
    { name: "Puma", img: "src/assets/companyimgs/puma.png" },
    { name: "adidas", img: "src/assets/companyimgs/adidas.png" },
    { name: "IBM", img: "src/assets/companyimgs/ibm.png" },
    { name: "Toyota", img: "src/assets/companyimgs/toyota.png" },
    { name: "Netflix", img: "src/assets/companyimgs/netflix.png" },
];

const CategoryCarousel = () => {
    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolling, setIsScrolling] = useState(true);

    // Duplicate the categories to simulate an infinite loop
    const duplicatedCategories = [...categories, ...categories];

    useEffect(() => {
        const carousel = carouselRef.current;
        let scrollInterval;

        const startScroll = () => {
            setIsScrolling(true);
            scrollInterval = setInterval(() => {
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                    carousel.scrollLeft = 0;  // Reset to the start
                } else {
                    carousel.scrollLeft += 1;
                }
                setScrollPosition(carousel.scrollLeft);
            }, 20);
        };

        const stopScroll = () => {
            clearInterval(scrollInterval);
            setIsScrolling(false);
        };

        carousel.addEventListener('mouseenter', stopScroll);
        carousel.addEventListener('mouseleave', startScroll);
        startScroll();

        return () => {
            stopScroll();
            carousel.removeEventListener('mouseenter', stopScroll);
            carousel.removeEventListener('mouseleave', startScroll);
        };
    }, []);

    const searchJobHandler = (categoryName) => {
        console.log(`Searching jobs in ${categoryName}`);
    };

    const scroll = (direction) => {
        const carousel = carouselRef.current;
        const scrollAmount = carousel.clientWidth;

        if (direction === 'left') {
            if (carousel.scrollLeft <= 0) {
                carousel.scrollLeft = carousel.scrollWidth / 2;  // Jump to the middle for infinite scrolling
            }
            carousel.scrollLeft -= scrollAmount;
        } else {
            if (carousel.scrollLeft + scrollAmount >= carousel.scrollWidth / 2) {
                carousel.scrollLeft = 0;  // Jump to the start when reaching the end
            }
            carousel.scrollLeft += scrollAmount;
        }

        setScrollPosition(carousel.scrollLeft);
    };

    return (
        <div className="relative w-full max-w-screen-xl mx-auto px-4">
            <div 
                ref={carouselRef}
                className="flex overflow-x-hidden whitespace-nowrap scrollbar-hide"
            >
                {duplicatedCategories.map((cat, index) => (
                    <div key={index} className="inline-block p-4 text-center">
                        <img 
                            src={cat.img} 
                            alt={cat.name} 
                            className="w-24 h-24 object-contain mb-2"  // Changed to 'object-contain' to maintain aspect ratio
                        />
                        <Button 
                            onClick={() => searchJobHandler(cat.name)} 
                            variant="outline" 
                            className="rounded-full text-sm whitespace-normal"
                        >
                            {cat.name}
                        </Button>
                    </div>
                ))}
            </div>
            <Button 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full"
                onClick={() => scroll('left')}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blend-color-burn rounded-full"
                onClick={() => scroll('right')}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default CategoryCarousel;
