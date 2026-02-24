
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredInfo } from '../constants';
import { InfoItem } from '../types';
import { LanguageType } from '../constants/translations';
import AdminAddPage from './AdminAddPage';
import AdminUpdatePage from './AdminUpdatePage';
import AdminDeletePage from './AdminDeletePage';
import AdminCodePage from './AdminCodePage';

const BackendMain: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'main' | 'add' | 'update' | 'delete' | 'code'>('main');
  const [adminLang, setAdminLang] = useState<LanguageType>('EN');
  const [currentInfo, setCurrentInfo] = useState<InfoItem[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem('is_admin') !== 'true') {
      navigate('/admin-login');
    }
    // Load current info for the main dashboard preview
    setCurrentInfo(getStoredInfo(adminLang).slice(0, 5));
  }, [navigate, view, adminLang]);

  const handleBackToMain = () => setView('main');

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Language Selector */}
        <div className="flex justify-center gap-4 mb-8">
          {(['EN', 'TC', 'JP'] as LanguageType[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setAdminLang(lang)}
              className={`px-6 py-2 border border-[#D4AF37] text-[10px] font-bold tracking-widest transition-all duration-300 ${adminLang === lang ? 'bg-[#D4AF37] text-black' : 'gold-text hover:bg-white/5'}`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button 
            onClick={() => setView('add')}
            className={`px-8 py-3 border border-[#D4AF37] tracking-[0.2em] text-[10px] font-bold transition-all duration-300 ${view === 'add' ? 'bg-[#D4AF37] text-black' : 'gold-text hover:bg-white/5'}`}
          >
            ADD
          </button>
          <button 
            onClick={() => setView('update')}
            className={`px-8 py-3 border border-[#D4AF37] tracking-[0.2em] text-[10px] font-bold transition-all duration-300 ${view === 'update' ? 'bg-[#D4AF37] text-black' : 'gold-text hover:bg-white/5'}`}
          >
            UPDATE
          </button>
          <button 
            onClick={() => setView('delete')}
            className={`px-8 py-3 border border-[#D4AF37] tracking-[0.2em] text-[10px] font-bold transition-all duration-300 ${view === 'delete' ? 'bg-[#D4AF37] text-black' : 'gold-text hover:bg-white/5'}`}
          >
            DELETE
          </button>
          <button 
            onClick={() => setView('code')}
            className={`px-8 py-3 border border-[#D4AF37] tracking-[0.2em] text-[10px] font-bold transition-all duration-300 ${view === 'code' ? 'bg-[#D4AF37] text-black' : 'gold-text hover:bg-white/5'}`}
          >
            CODE
          </button>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 border border-white text-white tracking-[0.2em] text-[10px] font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            BACK TO TOP
          </button>
        </div>

        <div className="bg-white/5 border border-[#D4AF37]/10 p-10 min-h-[500px]">
          {view === 'main' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-serif gold-text tracking-widest uppercase">BackendMain ({adminLang})</h2>
                <p className="text-gray-500 tracking-widest text-xs uppercase">Management Portal</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                  <h3 className="gold-text text-sm tracking-[0.3em] font-serif uppercase">Current TOP 5 Information</h3>
                  <span className="text-[9px] text-gray-600 tracking-widest uppercase">Live on site</span>
                </div>

                <div className="space-y-3">
                  {currentInfo.length > 0 ? (
                    currentInfo.map((item) => (
                      <div key={item.id} className="flex items-center py-4 px-6 bg-black/40 border border-white/5 rounded-sm">
                        <div className="w-32 flex-shrink-0">
                          <span className="text-[10px] text-gray-500 font-mono">{item.date.replace(/-/g, '.')}</span>
                        </div>
                        <div className="w-24 flex-shrink-0">
                          <span className="text-[9px] px-2 py-0.5 border border-[#D4AF37]/30 gold-text uppercase">
                            {item.category}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300 text-xs tracking-wide truncate pr-4">{item.title}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-20 text-center border border-dashed border-gray-800">
                      <p className="text-gray-600 text-[10px] tracking-widest uppercase italic">No information items found</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-10 text-center">
                <p className="text-gray-600 text-[9px] tracking-widest leading-loose uppercase">
                  Note: The "TOP" page displays a maximum of 5 items.<br/>
                  To edit the full list, use the buttons above.
                </p>
              </div>
            </div>
          )}
          {view === 'add' && <AdminAddPage onComplete={handleBackToMain} lang={adminLang} />}
          {view === 'update' && <AdminUpdatePage onComplete={handleBackToMain} lang={adminLang} />}
          {view === 'delete' && <AdminDeletePage onComplete={handleBackToMain} lang={adminLang} />}
          {view === 'code' && <AdminCodePage onComplete={handleBackToMain} lang={adminLang} />}
        </div>
      </div>
    </div>
  );
};

export default BackendMain;
