import React from "react";
import { Category } from "../interface/category";

interface FilterProductProps {
    categories: Category[];
    onCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter_Product: React.FC<FilterProductProps> = ({  categories, onCategoryChange }) => {

    return (
        <>
            <div>
                <h3 className="text-[#505F4E] text-[30px] leading-[20px] font-bold mb-[30px]">
                    Kategorien
                </h3>

                {/* Form group */}
                <form action="">
                    {categories.map((cate: Category) => (
                        <label
                            key={cate.name}
                            htmlFor={cate.name}
                            className="form__checkbox mb-[12px]"
                        >
                            <input
                                id={cate.name}
                                type="checkbox"
                                value={cate.id}
                                className="hidden bg-transparent"
                                onChange={onCategoryChange}
                            />
                            <span className="ml-[29px] capitalize font-[15px]">
                                {cate.name}
                            </span>
                        </label>
                    ))}
                </form>
            </div>
            {/* Other filter options */}
            <div className="mt-[40px] w-[213px] h-[262px] bg-[#0a0a0a66] relative z-10 ">
                <img
                    className="w-full h-full object-cover "
                    src="/assets/img/product_filter_1.jpg"
                    alt=""
                />
                <h3 className="text-[18px] text-white font-bold leading-[28px] absolute top-[32px] left-[25px]">
                    Grow your own favourite plant
                </h3>
                <div className="absolute bottom-[16px] left-[25px]">
                    <a
                        href="#!"
                        className="flex gap-2 items-center text-[15px] font-semibold leading-[22px] text-white"
                    >
                        Shop Now
                        <img
                            src="/assets/svg/arrow_cricel_rigt.svg"
                            alt=""
                            className="mt-[3px]"
                        />
                    </a>
                </div>
            </div>
            <div className="mt-[40px]">
                <div>
                    <p className="text-[16px] font-semibold ml-2">
                        Filter By Price
                    </p>
                    <img
                        src="/assets/svg/filter.svg"
                        alt=""
                        className="cursor-pointer"
                    />
                    <div className="flex justify-between max-w-[230px] ml-2">
                        <span className="text-[14px] text-[#9e9da85]">
                            From $0 to $8000
                        </span>
                        <span className="text-[14px] text-[#9e9da85]">
                            Filter
                        </span>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-[16px] font-semibold ml-2">
                        Filter By Size
                    </p>
                    <img
                        src="/assets/svg/filter.svg"
                        alt=""
                        className="cursor-pointer"
                    />
                    <div className="flex justify-between max-w-[230px] ml-2">
                        <span className="text-[14px] text-[#9e9da85]">
                            2 mm by 50
                        </span>
                        <span className="text-[14px] text-[#9e9da85]">
                            Filter
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter_Product;
