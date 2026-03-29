import React from 'react';
import banner from '../../assets/banner.png';
import { MoveRight, Check } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className='mt-10 border-b border-gray-300 w-11/12 mx-auto'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse max-sm:text-center">
                    <img
                        src={banner}
                        className="max-w-sm animate-pulse"
                    />
                    <div>
                        <div className="badge badge-soft badge-error border-red-500 p-5 rounded-4xl mb-5">Frontier AI Models</div>

                        <h1 className="text-4xl font-bold text-red-600">One Subscription.</h1>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">All the AIs You Need</h1>
                        <p className="py-6">
                            Experience the full spectrum of frontier intelligence — all the most advanced AI models, unified under a single, powerful subscription.
                        </p>
                        <button className="btn bg-red-600 text-xl text-white p-7 rounded-2xl">Get Unlimited Access<MoveRight /></button>
                        <div className='flex gap-5 mt-5'>
                            <p className='flex items-center'><Check />50+ Frontier Models</p>
                            <p className='flex items-center'><Check />No Usage Limits</p>
                            <p className='flex items-center'><Check />Cancel Anytime</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default HeroSection;