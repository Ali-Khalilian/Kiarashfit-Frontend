import React from 'react';
import Separator from '../../components/separator/Separator';
import AdminPanelContent from '../../components/adminPanel/AdminPanelContent';

const AdminPanel = () => {
  return (
    <section className="w-100 h-100 container">
    <Separator text="پنل ادمین" initiallyVisible={true} />
    <AdminPanelContent />
  </section>
  );
}

export default AdminPanel;