import { useState } from 'react';
import Programme from './tabs/Programme';
import Tarifs from './tabs/Tarifs';
import Contact from '../contact/contact';
import Egalite from './tabs/Egalite';
import Appointment from '../coursDeSoutien/appointment';

export default function DecouvrirTabs() {
    const [activeTab, setActiveTab] = useState<string>('Programme');

    const renderContent = () => {
        switch (activeTab) {
            case 'Programme':
                return <Programme />;
            case 'Tarifs et financements':
                return <Tarifs />;
            case 'Egalité des chances':
                return <Egalite/>
            default:
                return <Programme />;
        }
    };

    return (
        <div className="mt-8 ">
            <div className="flex md:space-x-4 justify-center md:px-20 px-5">
                <button
                    className={`px-6 py-2 font-family[Arial] text-[14px] md:text-[20px] font-bold leading-[22px] text-center rounded md:rounded-full ${
                        activeTab === 'Programme' ? 'bg-alva-light-blue text-white' : 'bg-white text-alva-light-blue "'
                    }`}
                    onClick={() => setActiveTab('Programme')}
                >
                    Programme
                </button>
                <button
                    className={`px-6 py-2 font-family[Arial] text-[14px] md:text-[20px] font-bold leading-[22px] text-center rounded md:rounded-full ${
                        activeTab === 'Tarifs et financements' ? 'bg-alva-light-blue text-white' : 'bg-white text-alva-light-blue "'
                    }`}
                    onClick={() => setActiveTab('Tarifs et financements')}
                >
                    Tarifs et financements
                </button>
                <button
                    className={`px-6 py-2 font-family[Arial] text-[14px] md:text-[20px] font-bold leading-[22px] text-center rounded md:rounded-full ${
                        activeTab === 'Egalité des chances' ? 'bg-alva-light-blue text-white' : 'bg-white text-alva-light-blue "'
                    }`}
                    onClick={() => setActiveTab('Egalité des chances')}
                >
                    Egalité des chances
                </button>
            </div>
            <div className="mt-8 mb-32 md:px-20 px-5">
                {renderContent()}
            </div>
            <Appointment />
        </div>
    );
}
