'use client';

import React, { createContext, useContext, useState } from 'react';
import RegisterModal from '@/components/modals/RegisterModal';
import PartnerModal from '@/components/modals/PartnerModal';
import CurriculumModal from '@/components/modals/CurriculumModal';

const ModalContext = createContext({
  openRegister: () => {},
  openPartner: () => {},
  openCurriculum: () => {},
});

export function ModalProvider({ children }) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [curriculumOpen, setCurriculumOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openRegister: () => setRegisterOpen(true),
        openPartner: () => setPartnerOpen(true),
        openCurriculum: () => setCurriculumOpen(true),
      }}
    >
      {children}

      <RegisterModal 
        isOpen={registerOpen} 
        onClose={() => setRegisterOpen(false)} 
      />
      <PartnerModal 
        isOpen={partnerOpen} 
        onClose={() => setPartnerOpen(false)} 
      />
      <CurriculumModal 
        isOpen={curriculumOpen} 
        onClose={() => setCurriculumOpen(false)} 
      />
    </ModalContext.Provider>
  );
}

export const useModals = () => useContext(ModalContext);
