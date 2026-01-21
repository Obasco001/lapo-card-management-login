import React, { useState } from 'react';
import { 
  Search, Bell, User, LayoutDashboard, Building2, ShieldAlert, Users, CreditCard, 
  FileText, Package, ListChecks, History, UserCircle, LogOut, ArrowUpRight, 
  Calendar, ChevronRight, Maximize2, Upload, Plus, RotateCw, Trash2, Edit2, X, 
  FileSpreadsheet, ChevronLeft, ChevronDown, UserPlus, Layers, Download, Truck, CheckCircle2, Check, Filter, CalendarDays, SlidersHorizontal, Eye, EyeOff, Map
} from 'lucide-react';
import Logo from './Logo';

interface DashboardProps {
  onLogout: () => void;
}

type TabType = 'dashboard' | 'branches' | 'roles' | 'users' | 'card-scheme' | 'card-profile' | 'card-request' | 'stock' | 'cards' | 'auth-list' | 'auth-queue' | 'trail' | 'account';

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAddBranchModalOpen, setIsAddBranchModalOpen] = useState(false);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isAddCardSchemeModalOpen, setIsAddCardSchemeModalOpen] = useState(false);
  const [showCreateRole, setShowCreateRole] = useState(false);
  const [showCreateProfile, setShowCreateProfile] = useState(false);
  const [showRequestDetails, setShowRequestDetails] = useState(false);

  // Reset sub-views when changing tabs
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setShowCreateRole(false);
    setShowCreateProfile(false);
    setShowRequestDetails(false);
  };

  return (
    <div className="flex min-h-screen w-full bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
        <div className="p-6">
          <Logo className="scale-90 origin-left" />
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-6 space-y-1 scrollbar-hide">
          <SidebarItem 
            icon={<LayoutDashboard size={18}/>} 
            label="Dashboard" 
            active={activeTab === 'dashboard'} 
            onClick={() => handleTabChange('dashboard')}
          />
          
          <div className="pt-4 pb-2">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Main Menu</p>
          </div>
          
          <SidebarItem icon={<Building2 size={18}/>} label="Branches" active={activeTab === 'branches'} onClick={() => handleTabChange('branches')} />
          <SidebarItem icon={<ShieldAlert size={18}/>} label="Roles" active={activeTab === 'roles'} onClick={() => handleTabChange('roles')} />
          <SidebarItem icon={<Users size={18}/>} label="Users" active={activeTab === 'users'} onClick={() => handleTabChange('users')} />
          <SidebarItem icon={<Layers size={18}/>} label="Card Scheme" active={activeTab === 'card-scheme'} onClick={() => handleTabChange('card-scheme')} />
          <SidebarItem icon={<UserCircle size={18}/>} label="Card Profile" active={activeTab === 'card-profile'} onClick={() => handleTabChange('card-profile')} />
          <SidebarItem icon={<FileText size={18}/>} label="Card Request" active={activeTab === 'card-request'} onClick={() => handleTabChange('card-request')} />
          <SidebarItem icon={<Package size={18}/>} label="Stock" active={activeTab === 'stock'} onClick={() => handleTabChange('stock')} />
          <SidebarItem icon={<CreditCard size={18}/>} label="Cards" active={activeTab === 'cards'} onClick={() => handleTabChange('cards')} />
          <SidebarItem icon={<ListChecks size={18}/>} label="Authorization List" active={activeTab === 'auth-list'} onClick={() => handleTabChange('auth-list')} />
          <SidebarItem icon={<ListChecks size={18}/>} label="Authorization Queue" active={activeTab === 'auth-queue'} onClick={() => handleTabChange('auth-queue')} />
          <SidebarItem icon={<Map size={18}/>} label="Trail" active={activeTab === 'trail'} onClick={() => handleTabChange('trail')} />
          <SidebarItem icon={<User size={18}/>} label="Account" active={activeTab === 'account'} onClick={() => handleTabChange('account')} />
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-4">
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-3 py-2 w-full text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors group"
          >
            <LogOut size={18} className="group-hover:rotate-180 transition-transform duration-300" />
            <span className="text-sm font-medium">Logout</span>
          </button>
          
          <div className="px-3">
             <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mb-2">Powered By</p>
             <div className="flex items-center gap-1 opacity-80">
                <div className="w-8 h-8 bg-[#004d8c] flex items-center justify-center rounded-sm">
                    <svg viewBox="0 0 100 100" className="w-3 h-3 text-white fill-current">
                        <path d="M20 50 L50 20 L80 50 L50 80 Z" />
                    </svg>
                </div>
                <span className="text-sm font-black text-[#004d8c] italic tracking-tight">cardinfra.</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-2 text-slate-400">
             {activeTab === 'dashboard' ? <LayoutDashboard size={16} /> : activeTab === 'branches' ? <Building2 size={16} /> : activeTab === 'users' ? <Users size={16} /> : activeTab === 'card-scheme' ? <Layers size={16} /> : activeTab === 'card-profile' ? <UserCircle size={16} /> : activeTab === 'card-request' ? <FileText size={16} /> : activeTab === 'cards' ? <CreditCard size={16} /> : activeTab === 'auth-list' || activeTab === 'auth-queue' ? <ListChecks size={16} /> : activeTab === 'trail' ? <Map size={16} /> : activeTab === 'account' ? <User size={16} /> : <ShieldAlert size={16} />}
             <span className="text-sm font-medium text-slate-600 capitalize">{activeTab.replace('-', ' ')}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-72">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input 
                 type="text" 
                 placeholder="Search" 
                 className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
               />
            </div>
            <button className="text-slate-400 hover:text-[#0051a8] transition-colors relative">
               <Bell size={20} />
               <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-100 cursor-pointer text-slate-400 flex items-center justify-center">
               <User size={20} />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        {activeTab === 'dashboard' ? (
          <DashboardOverview onNavigate={handleTabChange} />
        ) : activeTab === 'branches' ? (
          <BranchesView 
            onOpenUpload={() => setIsUploadModalOpen(true)} 
            onOpenAddBranch={() => setIsAddBranchModalOpen(true)}
          />
        ) : activeTab === 'roles' ? (
          showCreateRole ? (
            <CreateRoleView onBack={() => setShowCreateRole(false)} />
          ) : (
            <RolesView onCreateRole={() => setShowCreateRole(true)} />
          )
        ) : activeTab === 'users' ? (
          <UsersView onCreateUser={() => setIsCreateUserModalOpen(true)} />
        ) : activeTab === 'card-scheme' ? (
          <CardSchemeView onAddScheme={() => setIsAddCardSchemeModalOpen(true)} />
        ) : activeTab === 'card-profile' ? (
          showCreateProfile ? (
            <CreateProfileView onBack={() => setShowCreateProfile(false)} />
          ) : (
            <CardProfileView onAddProfile={() => setShowCreateProfile(true)} />
          )
        ) : activeTab === 'card-request' ? (
          showRequestDetails ? (
            <RequestDetailsView onBack={() => setShowRequestDetails(false)} />
          ) : (
            <CardRequestView onViewDetails={() => setShowRequestDetails(true)} />
          )
        ) : activeTab === 'cards' ? (
          <CardsView />
        ) : activeTab === 'auth-list' ? (
          <AuthorizationListView />
        ) : activeTab === 'auth-queue' ? (
          <AuthorizationQueueView />
        ) : activeTab === 'trail' ? (
          <TrailView />
        ) : activeTab === 'account' ? (
          <AccountView />
        ) : (
          <div className="p-12 text-center text-slate-400">
             <div className="mb-4 inline-flex p-6 rounded-full bg-slate-100">
                <LayoutDashboard size={48} className="opacity-20" />
             </div>
             <h2 className="text-xl font-bold text-slate-600">This section is coming soon</h2>
             <p>We are working hard to bring you the {activeTab.replace('-', ' ')} management tools.</p>
          </div>
        )}
      </div>

      {/* Modals */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all animate-in fade-in duration-300">
          <UploadModal onClose={() => setIsUploadModalOpen(false)} />
        </div>
      )}
      {isAddBranchModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all animate-in fade-in duration-300">
          <AddBranchModal onClose={() => setIsAddBranchModalOpen(false)} />
        </div>
      )}
      {isCreateUserModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all animate-in fade-in duration-300">
          <CreateUserModal onClose={() => setIsCreateUserModalOpen(false)} />
        </div>
      )}
      {isAddCardSchemeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all animate-in fade-in duration-300">
          <AddCardSchemeModal onClose={() => setIsAddCardSchemeModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

// --- Trail View ---

const TrailView: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">Trail</h1>
        <p className="text-sm text-slate-500">View details of different card trails here.</p>
      </div>

      <div className="flex flex-col gap-6 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all placeholder:text-slate-300 font-medium"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg bg-white text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm">
            <Filter size={18} className="text-slate-400" />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-slate-600 border-collapse">
          <thead className="bg-[#f8fafc] text-slate-500 font-bold border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Actor</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Event</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">State</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Device</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Time Stamp</th>
              <th className="px-6 py-4 text-center font-semibold text-slate-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
             {/* Matching the empty look from the Figma screenshot if no data, 
                 but keeping it clean. Re-adding some placeholder rows for functionality demo */}
             {[1].map((_, i) => (
                <tr key={i} className="hover:bg-slate-50/30 transition-colors h-16">
                  <td className="px-6 py-4 border-r border-slate-100 font-medium text-slate-500"></td>
                  <td className="px-6 py-4 border-r border-slate-100 text-center text-slate-500"></td>
                  <td className="px-6 py-4 border-r border-slate-100 text-center"></td>
                  <td className="px-6 py-4 border-r border-slate-100 text-center text-slate-500 font-mono text-xs"></td>
                  <td className="px-6 py-4 border-r border-slate-100 text-center text-slate-500"></td>
                  <td className="px-6 py-4 text-center"></td>
                </tr>
             ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm font-medium text-slate-400 py-4">
        <span>Page 1 of 1</span>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 transition-all font-bold disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-6 py-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 transition-all font-bold disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Account View ---

const AccountView: React.FC = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-1 border-b border-slate-100 pb-4">
        <h1 className="text-2xl font-bold text-slate-900">Account</h1>
        <p className="text-sm text-slate-500">Change your password here.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm max-w-2xl">
        <div className="p-8 space-y-8">
          <h2 className="text-lg font-bold text-slate-800">Change Password</h2>
          
          <div className="space-y-6">
            {/* Old Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Old Password*</label>
              <div className="relative">
                <input 
                  type={showOld ? "text" : "password"}
                  placeholder="Input" 
                  className="w-full px-4 py-3.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all placeholder:text-slate-300"
                />
                <button 
                  type="button"
                  onClick={() => setShowOld(!showOld)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showOld ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">New Password*</label>
              <div className="relative">
                <input 
                  type={showNew ? "text" : "password"}
                  placeholder="Create password" 
                  className="w-full px-4 py-3.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all placeholder:text-slate-300"
                />
                <button 
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">Password required to be at least 8 characters long</p>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Confirm Password*</label>
              <div className="relative">
                <input 
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password" 
                  className="w-full px-4 py-3.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all placeholder:text-slate-300"
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">Passwords must match</p>
            </div>
          </div>

          <button className="w-full max-w-[240px] py-3.5 px-6 bg-[#0041a8] text-white rounded-lg text-sm font-bold hover:bg-[#00358a] transition-all active:scale-[0.98] shadow-lg shadow-[#0041a8]/20 mt-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Authorization Queue View ---

const AuthorizationQueueView: React.FC = () => {
  const [queue, setQueue] = useState([
    { id: 1, initiator: 'Nazeer', menu: 'Branch', access: 'Create', date: '11/14/2024 10:27:43', status: 'Pending' },
    { id: 2, initiator: 'Nazeer', menu: 'Users', access: 'Edit', date: '11/14/2024 10:27:43', status: 'Pending' },
    { id: 3, initiator: 'Nazeer', menu: 'Roles', access: 'Full', date: '11/14/2024 10:27:43', status: 'Pending' },
    { id: 4, initiator: 'Nazeer', menu: 'Roles', access: 'Create', date: '11/14/2024 10:27:43', status: 'Pending' },
    { id: 5, initiator: 'Nazeer', menu: 'Card Request', access: 'Full', date: '11/14/2024 10:27:43', status: 'Pending' },
  ]);

  const handleAction = (id: number, action: 'Approved' | 'Declined') => {
    setQueue(queue.map(item => item.id === id ? { ...item, status: action } : item));
  };

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">Authorization Queue</h1>
        <p className="text-sm text-slate-500">Shows the different requests for authorized roles.</p>
      </div>

      <div className="flex flex-col gap-6 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search user" 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all placeholder:text-slate-300 font-medium"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg bg-white text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors">
            <Filter size={18} className="text-slate-400" />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-slate-600 border-collapse">
          <thead className="bg-[#f8fafc] text-slate-500 font-bold border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Initiator</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Menu</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Access</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Date Requested</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Status</th>
              <th className="px-6 py-4 text-center font-semibold text-slate-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {queue.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/30 transition-colors">
                <td className="px-6 py-4 border-r border-slate-100 font-medium text-slate-500">{item.initiator}</td>
                <td className="px-6 py-4 border-r border-slate-100 text-center text-slate-500">{item.menu}</td>
                <td className="px-6 py-4 border-r border-slate-100 text-center text-slate-500">{item.access}</td>
                <td className="px-6 py-4 border-r border-slate-100 text-center text-slate-500">{item.date}</td>
                <td className="px-6 py-4 border-r border-slate-100 text-center">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-bold border ${
                    item.status === 'Pending' ? 'bg-orange-50 text-orange-500 border-orange-100' :
                    item.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' :
                    'bg-red-50 text-red-600 border-red-100'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {item.status === 'Pending' ? (
                    <div className="flex items-center justify-center gap-4">
                      <button 
                        onClick={() => handleAction(item.id, 'Approved')}
                        className="text-green-600 hover:text-green-700 font-bold text-xs transition-colors"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleAction(item.id, 'Declined')}
                        className="text-red-500 hover:text-red-600 font-bold text-xs transition-colors"
                      >
                        Decline
                      </button>
                    </div>
                  ) : (
                    <div className="text-center text-slate-300 text-xs italic">Actioned</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm font-medium text-slate-400 py-4">
        <span>Page 1 of 1</span>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all font-bold disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-6 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all font-bold disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Authorization List View ---

const AuthorizationListView: React.FC = () => {
  const [items, setItems] = useState([
    { menu: 'Users', access: 'Create', enabled: true },
    { menu: 'Users', access: 'Edit', enabled: true },
    { menu: 'Roles', access: 'Full', enabled: true },
    { menu: 'Roles', access: 'Create', enabled: false },
  ]);

  const toggleEnabled = (index: number) => {
    const newItems = [...items];
    newItems[index].enabled = !newItems[index].enabled;
    setItems(newItems);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">Authorization List</h1>
        <p className="text-sm text-slate-500">Shows list of all users with authorized roles.</p>
      </div>

      <div className="flex flex-col gap-6 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search user" 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all placeholder:text-slate-300 font-medium"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg bg-white text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors">
            <Filter size={18} className="text-slate-400" />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-slate-600 border-collapse">
          <thead className="bg-[#f8fafc] text-slate-500 font-bold border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Menu</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Access</th>
              <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Enabled</th>
              <th className="px-6 py-4 text-center font-semibold text-slate-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item, i) => (
              <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                <td className="px-6 py-4 border-r border-slate-100 text-slate-500 font-medium">{item.menu}</td>
                <td className="px-6 py-4 border-r border-slate-100 text-center text-slate-500">{item.access}</td>
                <td className="px-6 py-4 border-r border-slate-100 text-center">
                  <button 
                    onClick={() => toggleEnabled(i)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${item.enabled ? 'bg-[#0051a8]' : 'bg-slate-200'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${item.enabled ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-semibold text-sm">
                    Configure
                    <SlidersHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm font-medium text-slate-400 py-4">
        <span>Page 1 of 1</span>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all font-bold disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-6 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all font-bold disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// --- View Components (Dashboard, Branches, etc.) ---

const CardsView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'Personalized' | 'Instant' | 'Blocked' | 'Pin Reissue'>('Personalized');

  const isBlockedOrPin = activeSubTab === 'Blocked' || activeSubTab === 'Pin Reissue';

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">Cards</h1>
        <p className="text-sm text-slate-500">View all cards status here.</p>
      </div>

      {/* Filters & Tabs Section */}
      <div className="flex flex-col gap-6 pt-2 border-t border-slate-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white p-1">
            {(['Personalized', 'Instant', 'Blocked', 'Pin Reissue'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`px-6 py-2 text-sm font-semibold rounded-md transition-all flex items-center gap-2 ${
                  activeSubTab === tab 
                    ? 'bg-slate-50 text-[#0051a8]' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {activeSubTab === tab && <div className="w-1.5 h-1.5 rounded-full bg-[#0051a8]"></div>}
                {tab}
              </button>
            ))}
          </div>

          {!isBlockedOrPin && (
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0051a8] text-white rounded-lg text-sm font-bold hover:bg-[#004185] transition-all shadow-lg shadow-[#0051a8]/20 active:scale-95">
              <CreditCard size={18} />
              Issue Card
            </button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search card" 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all placeholder:text-slate-300 font-medium"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors">
            <CalendarDays size={16} className="text-slate-400" />
            Date
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors">
            <Filter size={16} className="text-slate-400" />
            Filter
          </button>
        </div>
      </div>

      {/* Cards Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-slate-600 border-collapse">
          <thead className="bg-[#f8fafc] text-slate-500 font-bold border-b border-slate-200">
            {isBlockedOrPin ? (
              <tr>
                <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Initiator</th>
                <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Account Number</th>
                <th className="px-6 py-4 text-center border-r border-slate-100 font-semibold text-slate-700">Masked PAN</th>
                <th className="px-6 py-4 text-right font-semibold text-slate-700">Date Requested</th>
              </tr>
            ) : (
              <tr>
                <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Cardholder</th>
                <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Masked PAN</th>
                <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Date Issued</th>
                <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Expiry</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-700">Batch</th>
              </tr>
            )}
          </thead>
          <tbody className="divide-y divide-slate-100">
            {Array.from({ length: 12 }).map((_, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                {isBlockedOrPin ? (
                  <>
                    <td className="px-6 py-4 border-r border-slate-100 font-medium">Nazeer Ajibola</td>
                    <td className="px-6 py-4 border-r border-slate-100 text-center text-slate-500">1234567890</td>
                    <td className="px-6 py-4 border-r border-slate-100 text-center font-mono text-xs text-slate-500 tracking-wider">506112*********6382</td>
                    <td className="px-6 py-4 text-right text-slate-500">11/1/2024 09:23:37</td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 border-r border-slate-100 font-medium">Nazeer Ajibola</td>
                    <td className="px-6 py-4 border-r border-slate-100 font-mono text-xs text-slate-500 tracking-wider">506112*********6382</td>
                    <td className="px-6 py-4 border-r border-slate-100 text-slate-500">11/14/2024 10:27:43</td>
                    <td className="px-6 py-4 border-r border-slate-100 text-slate-500">32 months</td>
                    <td className="px-6 py-4 text-slate-500">847264905</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm font-medium text-slate-400 py-4">
        <span>Page 1 of {isBlockedOrPin ? '1' : '20'}</span>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all font-bold disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-6 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all font-bold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const SuccessModal: React.FC<{ message: string, onClose: () => void }> = ({ message, onClose }) => {
  return (
    <div className="bg-white rounded-[24px] w-full max-w-[400px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col items-start p-8">
      <div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
          <Check size={20} />
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-slate-900 mb-2">Successful</h2>
      <p className="text-sm text-slate-500 mb-8 font-medium">{message}</p>
      
      <button 
        onClick={onClose}
        className="w-full sm:w-auto px-10 py-3 rounded-lg text-sm font-bold text-white bg-[#0051a8] hover:bg-[#004185] transition-all active:scale-[0.98] shadow-lg shadow-[#0051a8]/20"
      >
        Continue
      </button>
    </div>
  );
};

const RequestDetailsView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentStatus, setCurrentStatus] = useState<'Pending' | 'Downloaded' | 'In Progress' | 'Ready' | 'Dispatched' | 'Acknowledged'>('Pending');
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; message: string; targetStatus: typeof currentStatus } | null>(null);

  const triggerModal = (message: string, targetStatus: typeof currentStatus) => {
    setModalConfig({ isOpen: true, message, targetStatus });
  };

  const handleModalContinue = () => {
    if (modalConfig) {
      setCurrentStatus(modalConfig.targetStatus);
      setModalConfig(null);
    }
  };

  const statusColors: Record<string, string> = {
    'Pending': 'bg-slate-100 text-slate-500 border-slate-200',
    'Downloaded': 'bg-blue-50 text-blue-500 border-blue-100',
    'In Progress': 'bg-orange-50 text-orange-600 border-orange-200',
    'Ready': 'bg-green-50 text-green-600 border-green-200',
    'Dispatched': 'bg-purple-50 text-purple-600 border-purple-200',
    'Acknowledged': 'bg-[#e0f2fe] text-[#0369a1] border-[#bae6fd]',
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header Breadcrumb */}
      <div className="flex items-center gap-4 text-xs font-medium text-slate-400 border-b border-slate-100 pb-4">
        <button onClick={onBack} className="flex items-center gap-1 hover:text-[#0051a8] transition-colors">
           <ChevronLeft size={14} />
           <span>Back</span>
        </button>
        <span className="text-slate-200">|</span>
        <div className="flex items-center gap-2">
           <FileText size={14} />
           <span className="cursor-pointer hover:text-slate-600" onClick={onBack}>Card Request</span>
           <ChevronRight size={12} className="text-slate-200" />
           <span className="text-slate-900 font-bold">Request Details</span>
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">Request Details</h1>
        <p className="text-sm text-slate-500">Perform predetermined actions on card requests here.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/30">
          <h2 className="text-base font-bold text-slate-800">Card Request Details</h2>
        </div>
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <ReadOnlyField label="Branch Name" value="Corporate" />
            <ReadOnlyField label="Initiator" value="RootUser" />
            <ReadOnlyField label="Card Type" value="Classic Debit" />
            <ReadOnlyField label="Card Charges" value="₦1,500" />
            <ReadOnlyField label="Quantity" value="10" />
            <ReadOnlyField label="Batch" value="847264905" />
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-500">Date Requested</label>
              <div className="text-sm font-semibold text-slate-900">11/14/2024 10:27:43</div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-500">Status</label>
              <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full border transition-colors ${statusColors[currentStatus]}`}>
                {currentStatus}
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Actions</h3>
            <div className="flex flex-wrap gap-3">
              {/* Step 1: Download */}
              <ActionButton 
                icon={<Download size={16} />} 
                label="Download for Production" 
                onClick={() => triggerModal("Production file has been downloaded.", 'Downloaded')}
                disabled={currentStatus !== 'Pending'}
                className={currentStatus === 'Pending' ? "bg-[#1e293b] text-white hover:bg-[#0f172a]" : "bg-slate-100 text-slate-400 cursor-not-allowed opacity-50"}
              />
              
              {/* Step 2: Mark as In Progress */}
              <ActionButton 
                icon={<RotateCw size={16} />} 
                label="Mark as In Progress" 
                onClick={() => setCurrentStatus('In Progress')}
                disabled={currentStatus !== 'Downloaded'}
                className={currentStatus === 'Downloaded' ? "bg-[#ffedd5] text-[#9a3412] hover:bg-[#fed7aa] border border-[#fdba74]" : "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed opacity-50"} 
              />

              {/* Step 3: Mark as Ready */}
              <ActionButton 
                icon={<Package size={16} />} 
                label="Mark as Ready" 
                onClick={() => setCurrentStatus('Ready')}
                disabled={currentStatus !== 'In Progress'}
                className={currentStatus === 'In Progress' ? "bg-[#dcfce7] text-[#166534] hover:bg-[#bbf7d0] border border-[#86efac]" : "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed opacity-50"} 
              />

              {/* Step 4: Send to Dispatch */}
              <ActionButton 
                icon={<Truck size={16} />} 
                label="Send to Dispatch" 
                onClick={() => triggerModal("Card batch successfully sent to dispatch.", 'Dispatched')}
                disabled={currentStatus !== 'Ready'}
                className={currentStatus === 'Ready' ? "bg-[#f3e8ff] text-[#6b21a8] hover:bg-[#e9d5ff] border border-[#d8b4fe]" : "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed opacity-50"} 
              />

              {/* Step 5: Mark as Acknowledged */}
              <ActionButton 
                icon={<CheckCircle2 size={16} />} 
                label="Mark as Acknowledged" 
                onClick={() => triggerModal("Card batch successfully acknowledged.", 'Acknowledged')}
                disabled={currentStatus !== 'Dispatched'}
                className={currentStatus === 'Dispatched' ? "bg-[#0051a8] text-white hover:bg-[#004185] shadow-lg shadow-[#0051a8]/20" : (currentStatus === 'Acknowledged' ? "bg-[#0051a8] text-white opacity-40 cursor-not-allowed" : "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed opacity-50")} 
              />
            </div>
          </div>
        </div>
      </div>

      {modalConfig?.isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all animate-in fade-in duration-300">
          <SuccessModal message={modalConfig.message} onClose={handleModalContinue} />
        </div>
      )}
    </div>
  );
};

const ReadOnlyField: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="space-y-1.5">
    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</label>
    <div className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-800">
      {value}
    </div>
  </div>
);

const ActionButton: React.FC<{ icon: React.ReactNode, label: string, className: string, onClick?: () => void, disabled?: boolean }> = ({ icon, label, className, onClick, disabled }) => (
  <button 
    onClick={onClick} 
    disabled={disabled}
    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all active:scale-[0.98] ${className}`}
  >
    {icon}
    {label}
  </button>
);

const CardRequestView: React.FC<{ onViewDetails: () => void }> = ({ onViewDetails }) => (
  <div className="p-8 space-y-6">
    <div className="space-y-1">
      <h1 className="text-2xl font-bold text-slate-900">Card Request</h1>
      <p className="text-sm text-slate-500">View and attend to card requests here.</p>
    </div>

    {/* Actions Bar */}
    <div className="flex justify-between items-center border-t border-slate-100 pt-6">
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search by branch @olivia" 
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all"
        />
      </div>
    </div>

    {/* Table */}
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-sm text-slate-600 border-collapse">
        <thead className="bg-slate-50/50 text-slate-500 font-bold border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Branch</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Initiator</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Quantity</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Batch</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Date Requested</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Status</th>
            <th className="px-6 py-4 text-left font-semibold text-slate-700">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <CardRequestTableRow branch="Corporate" initiator="RootUser" quantity="10" batch="847264905" date="11/14/2024 10:27:43" status="Ready" onView={onViewDetails} />
          <CardRequestTableRow branch="Corporate" initiator="RootUser" quantity="10" batch="847264905" date="11/14/2024 10:27:43" status="Ready" onView={onViewDetails} />
          <CardRequestTableRow branch="Corporate" initiator="RootUser" quantity="10" batch="847264905" date="11/14/2024 10:27:43" status="In Progress" onView={onViewDetails} />
          <CardRequestTableRow branch="Corporate" initiator="RootUser" quantity="10" batch="847264905" date="11/14/2024 10:27:43" status="Pending" onView={onViewDetails} />
          <CardRequestTableRow branch="Corporate" initiator="RootUser" quantity="10" batch="847264905" date="11/14/2024 10:27:43" status="Acknowledged" onView={onViewDetails} />
        </tbody>
      </table>
    </div>
  </div>
);

const CardRequestTableRow: React.FC<{ branch: string, initiator: string, quantity: string, batch: string, date: string, status: string, onView: () => void }> = ({ branch, initiator, quantity, batch, date, status, onView }) => {
  const statusColors: any = {
    'Ready': 'bg-green-50 text-green-600 border-green-200',
    'In Progress': 'bg-orange-50 text-orange-600 border-orange-200',
    'Acknowledged': 'bg-blue-50 text-blue-600 border-blue-200',
    'Pending': 'bg-slate-50 text-slate-400 border-slate-200'
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4 border-r border-slate-100">{branch}</td>
      <td className="px-6 py-4 border-r border-slate-100">{initiator}</td>
      <td className="px-6 py-4 border-r border-slate-100">{quantity}</td>
      <td className="px-6 py-4 border-r border-slate-100">{batch}</td>
      <td className="px-6 py-4 border-r border-slate-100">{date}</td>
      <td className="px-6 py-4 border-r border-slate-100">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${statusColors[status] || statusColors['Pending']}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4">
        <button onClick={onView} className="text-[#0051a8] font-bold text-xs hover:underline">View</button>
      </td>
    </tr>
  );
};

const AddFeeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white rounded-[24px] w-full max-w-[480px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col">
      <div className="p-8 pb-4">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <Plus size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Add Fee</h2>
              <p className="text-sm text-slate-500">Fill in fee details.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
            <X size={20} />
          </button>
        </div>

        <form className="space-y-5 pt-4 border-t border-slate-100 max-h-[60vh] overflow-y-auto scrollbar-hide px-0.5">
          <InputField label="Fee Name*" placeholder="Maintenance" />
          
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Value</label>
            <div className="relative">
              <input 
                type="number" 
                defaultValue={0}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none text-slate-300">
                <ChevronDown size={14} className="rotate-180" />
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">Currency</label>
            <div className="flex items-center gap-6">
              <RadioOption label="NGN" name="currency" checked />
              <RadioOption label="USD" name="currency" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">Fee Frequency</label>
            <div className="flex items-center gap-6">
              <RadioOption label="One Off" name="frequency" />
              <RadioOption label="Monthly" name="frequency" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">Fee Impact</label>
            <div className="flex items-center gap-6">
              <RadioOption label="Issuance" name="impact" />
              <RadioOption label="Pin Reissue" name="impact" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">Account Pad</label>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <RadioOption label="None" name="pad" checked />
              <RadioOption label="Branch Code Prefix" name="pad" />
              <RadioOption label="Branch Code Suffix" name="pad" />
            </div>
          </div>

          <InputField label="Account" placeholder="Account" />
        </form>
      </div>

      <div className="p-8 pb-10">
        <button 
          onClick={onClose}
          className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#0051a8] hover:bg-[#004185] transition-all shadow-lg shadow-[#0051a8]/20 active:scale-[0.98]"
        >
          Add Fee
        </button>
      </div>
    </div>
  );
};

const RadioOption: React.FC<{ label: string, name: string, checked?: boolean }> = ({ label, name, checked }) => (
  <label className="flex items-center gap-2 cursor-pointer group">
    <div className="relative flex items-center justify-center">
      <input 
        type="radio" 
        name={name} 
        defaultChecked={checked}
        className="peer appearance-none w-5 h-5 rounded-full border-2 border-slate-300 checked:border-[#0051a8] transition-all cursor-pointer" 
      />
      <div className="absolute w-2.5 h-2.5 rounded-full bg-[#0051a8] opacity-0 peer-checked:opacity-100 scale-0 peer-checked:scale-100 transition-all"></div>
    </div>
    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{label}</span>
  </label>
);

const CreateProfileView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isAddFeeModalOpen, setIsAddFeeModalOpen] = useState(false);

  return (
    <div className="p-8 space-y-6">
      {/* Header Breadcrumb */}
      <div className="flex items-center gap-4 text-xs font-medium text-slate-400 border-b border-slate-100 pb-4">
        <button onClick={onBack} className="flex items-center gap-1 hover:text-[#0051a8] transition-colors">
           <ChevronLeft size={14} />
           <span>Back</span>
        </button>
        <span className="text-slate-200">|</span>
        <div className="flex items-center gap-2">
           <UserCircle size={14} />
           <span className="cursor-pointer hover:text-slate-600" onClick={onBack}>Card Profile</span>
           <ChevronRight size={12} className="text-slate-200" />
           <span className="text-slate-900 font-bold">Create Profile</span>
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">Create Profile</h1>
        <p className="text-sm text-slate-500">Fill in profile details and add card fee.</p>
      </div>

      {/* Profile Details Card */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/30">
          <h2 className="text-base font-bold text-slate-800">Profile Details</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <InputField label="Card Name*" placeholder="Enter card name" />
          <InputField label="Bin Prefix*" placeholder="00000000" />
          
          <SelectField label="Card Scheme*" value="Verve" />
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Expiration*</label>
            <div className="relative">
              <input 
                type="number" 
                placeholder="0" 
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none text-slate-300">
                <ChevronDown size={14} className="rotate-180" />
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <div className="md:col-span-1 space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Description</label>
            <textarea 
               placeholder="Enter description" 
               className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all h-24 resize-none placeholder:text-slate-300"
            />
          </div>

          <div className="space-y-6">
            <SelectField label="Currency*" value="NGN" />
            <SelectField label="Branch Blacklist" value="Head Office" />
          </div>
        </div>
      </div>

      {/* Fees Card */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/30">
          <h2 className="text-base font-bold text-slate-800">Fees</h2>
        </div>
        <div className="p-6">
          <button 
            onClick={() => setIsAddFeeModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#0051a8] text-white rounded-lg text-sm font-semibold hover:bg-[#004185] transition-all active:scale-95 shadow-lg shadow-[#0051a8]/10 mb-6"
          >
            <Plus size={18} />
            Add Fee
          </button>

          <div className="border border-slate-100 rounded-lg overflow-hidden">
             <table className="w-full text-xs text-slate-600 border-collapse">
               <thead className="bg-[#f8fafc] text-slate-400 font-bold border-b border-slate-100">
                 <tr>
                   <th className="px-4 py-3 text-left border-r border-slate-50 font-medium">Name</th>
                   <th className="px-4 py-3 text-left border-r border-slate-50 font-medium">Value</th>
                   <th className="px-4 py-3 text-left border-r border-slate-50 font-medium">Frequency</th>
                   <th className="px-4 py-3 text-left border-r border-slate-50 font-medium">Currency</th>
                   <th className="px-4 py-3 text-left border-r border-slate-50 font-medium">Time</th>
                   <th className="px-4 py-3 text-left border-r border-slate-50 font-medium">Account Pad</th>
                   <th className="px-4 py-3 text-left font-medium">Account</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 <tr>
                   <td className="px-4 py-8 text-center" colSpan={7}>
                      <span className="text-slate-300 italic">No fees added yet. Click "Add Fee" to begin.</span>
                   </td>
                 </tr>
               </tbody>
             </table>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button 
          className="w-full max-w-[240px] py-3.5 rounded-lg text-sm font-bold text-white bg-[#0051a8] hover:bg-[#004185] transition-all shadow-lg shadow-[#0051a8]/20 active:scale-[0.98]"
        >
          Create Profile
        </button>
      </div>

      {isAddFeeModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all animate-in fade-in duration-300">
          <AddFeeModal onClose={() => setIsAddFeeModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

const CardProfileView: React.FC<{ onAddProfile: () => void }> = ({ onAddProfile }) => (
  <div className="p-8 space-y-6">
    <div className="space-y-1">
      <h1 className="text-2xl font-bold text-slate-900">Card Profile</h1>
      <p className="text-sm text-slate-500">Create, view and edit card profiles here.</p>
    </div>

    {/* Actions Bar */}
    <div className="flex justify-between items-center border-t border-slate-100 pt-6">
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search by card name @olivia" 
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all"
        />
      </div>
      <button 
        onClick={onAddProfile}
        className="flex items-center gap-2 px-4 py-2.5 bg-[#0051a8] text-white rounded-lg text-sm font-semibold hover:bg-[#004185] transition-all active:scale-95 shadow-lg shadow-[#0051a8]/10"
      >
        <Plus size={18} />
        Add Profile
      </button>
    </div>

    {/* Table */}
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-sm text-slate-600 border-collapse">
        <thead className="bg-slate-50/50 text-slate-500 font-bold border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Card Name</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Currency</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Expiration</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Bin Prefix</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-semibold text-slate-700">Date Created</th>
            <th className="px-6 py-4 text-left font-semibold text-slate-700">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3].map((_, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 border-r border-slate-100">Verve-1</td>
              <td className="px-6 py-4 border-r border-slate-100">NGN</td>
              <td className="px-6 py-4 border-r border-slate-100">40 months</td>
              <td className="px-6 py-4 border-r border-slate-100">50611234</td>
              <td className="px-6 py-4 border-r border-slate-100">11/10/2024 23:21:03</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-[#0051a8] transition-colors">
                    <Edit2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const AddCardSchemeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white rounded-[24px] w-full max-w-[480px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col">
      <div className="p-8 pb-4">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <CreditCard size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Add Card Scheme</h2>
              <p className="text-sm text-slate-500">Fill in scheme name and PAN length.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
            <X size={20} />
          </button>
        </div>

        <form className="space-y-5 pt-4 border-t border-slate-100">
          <InputField label="Scheme Name*" placeholder="Verve" />
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">PAN Length</label>
            <input 
              type="number" 
              placeholder="0" 
              defaultValue={0}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
            />
          </div>
        </form>
      </div>

      <div className="p-8 pb-10">
        <button 
          className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#0051a8] hover:bg-[#004185] transition-all shadow-lg shadow-[#0051a8]/20 active:scale-[0.98]"
        >
          Add Scheme
        </button>
      </div>
    </div>
  );
};

const CardSchemeView: React.FC<{ onAddScheme: () => void }> = ({ onAddScheme }) => (
  <div className="p-8 space-y-6">
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Card Scheme</h1>
        <p className="text-sm text-slate-500">Add, view and edit card schemes here.</p>
      </div>
    </div>

    {/* Actions Bar */}
    <div className="flex justify-between items-center border-t border-slate-100 pt-6">
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search by scheme name @olivia" 
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all"
        />
      </div>
      <button 
        onClick={onAddScheme}
        className="flex items-center gap-2 px-4 py-2.5 bg-[#0051a8] text-white rounded-lg text-sm font-semibold hover:bg-[#004185] transition-all active:scale-95 shadow-lg shadow-[#0051a8]/10"
      >
        <Plus size={18} />
        Add Scheme
      </button>
    </div>

    {/* Card Scheme Table */}
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-sm text-slate-600 border-collapse">
        <thead className="bg-slate-50/50 text-slate-500 font-bold border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium w-[40%]">Scheme Name</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium w-[40%]">PAN Length</th>
            <th className="px-6 py-4 text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3].map((_, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 border-r border-slate-100">Verve</td>
              <td className="px-6 py-4 border-r border-slate-100">16</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-[#0051a8] transition-colors">
                    <Edit2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const CreateUserModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white rounded-[24px] w-full max-w-[480px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <UserPlus size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Create User</h2>
              <p className="text-sm text-slate-500">Fill in user details and assign role.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
            <X size={20} />
          </button>
        </div>

        <form className="space-y-4 pt-4 border-t border-slate-100 overflow-y-auto max-h-[500px] px-0.5 scrollbar-hide">
          <InputField label="Username*" placeholder="User" />
          <InputField label="First name*" placeholder="Nazeer" />
          <InputField label="Last name*" placeholder="Ajibola" />
          <InputField label="Email address*" placeholder="Ajibola" />
          <InputField label="Phone*" placeholder="09012345678" />
          <InputField label="Password*" placeholder="********" type="password" />
          
          <SelectField label="Access Level" value="Select level from dropdown" />
          <SelectField label="Branch" value="Select branch from dropdown" />
          <SelectField label="Assign Role" value="Select role from dropdown" />
        </form>
      </div>

      <div className="p-8 pt-4 pb-10">
        <button 
          className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#0051a8] hover:bg-[#004185] transition-all shadow-lg shadow-[#0051a8]/20 active:scale-[0.98]"
        >
          Create user
        </button>
      </div>
    </div>
  );
};

const InputField: React.FC<{ label: string, placeholder: string, type?: string }> = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-1.5">
    <label className="block text-sm font-medium text-slate-700">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all placeholder:text-slate-300"
    />
  </div>
);

const SelectField: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="space-y-1.5">
    <label className="block text-sm font-medium text-slate-700">{label}</label>
    <div className="relative cursor-pointer group">
      <div className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-400 flex items-center justify-between group-hover:border-[#0051a8]/30 transition-all">
        {value}
        <ChevronDown size={18} className="text-slate-300" />
      </div>
    </div>
  </div>
);

const BranchesView: React.FC<{ onOpenUpload: () => void, onOpenAddBranch: () => void }> = ({ onOpenUpload, onOpenAddBranch }) => (
  <div className="p-8 space-y-6">
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Branches</h1>
        <p className="text-sm text-slate-500">Manage your bank branches, create new ones or upload them in bulk.</p>
      </div>
    </div>

    {/* Actions Bar */}
    <div className="flex justify-between items-center border-t border-slate-100 pt-6">
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search branch name" 
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all"
        />
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={onOpenUpload}
          className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all active:scale-95"
        >
          <Upload size={18} />
          Upload CSV
        </button>
        <button 
          onClick={onOpenAddBranch}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0051a8] text-white rounded-lg text-sm font-semibold hover:bg-[#004185] transition-all active:scale-95 shadow-lg shadow-[#0051a8]/10"
        >
          <Plus size={18} />
          Add Branch
        </button>
      </div>
    </div>

    {/* Branches Table */}
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-sm text-slate-600 border-collapse">
        <thead className="bg-slate-50/50 text-slate-500 font-bold border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Name</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Code</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Zone</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Area</th>
            <th className="px-6 py-4 text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            { name: "Head Office", code: "001", zone: "Lagos Central", area: "Victoria Island" },
            { name: "Lekki Branch", code: "002", zone: "Lagos East", area: "Lekki Phase 1" },
            { name: "Ikeja Branch", code: "003", zone: "Lagos West", area: "Ikeja" },
          ].map((branch, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 border-r border-slate-100 font-medium">{branch.name}</td>
              <td className="px-6 py-4 border-r border-slate-100">{branch.code}</td>
              <td className="px-6 py-4 border-r border-slate-100">{branch.zone}</td>
              <td className="px-6 py-4 border-r border-slate-100">{branch.area}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-[#0051a8] transition-colors">
                    <Edit2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const UsersView: React.FC<{ onCreateUser: () => void }> = ({ onCreateUser }) => (
  <div className="p-8 space-y-6">
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Users</h1>
        <p className="text-sm text-slate-500">Manage your users, create users, view and edit users. Assign roles to users here.</p>
      </div>
    </div>

    {/* Actions Bar */}
    <div className="flex justify-between items-center border-t border-slate-100 pt-6">
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search by username @olivia" 
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all"
        />
      </div>
      <button 
        onClick={onCreateUser}
        className="flex items-center gap-2 px-4 py-2.5 bg-[#0051a8] text-white rounded-lg text-sm font-semibold hover:bg-[#004185] transition-all active:scale-95 shadow-lg shadow-[#0051a8]/10"
      >
        <Plus size={18} />
        Create User
      </button>
    </div>

    {/* Users Table */}
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-sm text-slate-600 border-collapse">
        <thead className="bg-slate-50/50 text-slate-500 font-bold border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Username</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Phone</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Email</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Date Created</th>
            <th className="px-6 py-4 text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3].map((_, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 border-r border-slate-100">RootUser</td>
              <td className="px-6 py-4 border-r border-slate-100 font-medium">09012345678</td>
              <td className="px-6 py-4 border-r border-slate-100">rootuser@mercator.com</td>
              <td className="px-6 py-4 border-r border-slate-100">11/09/2024 08:41:37</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-[#0051a8] transition-colors">
                    <Edit2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const CreateRoleView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const menuItems = [
    "Branch", "User", "Role", "Cards", "Card Request", "Authorization List", "Authorization Queue", "Activity"
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-4 text-sm text-slate-400 border-b border-slate-100 pb-4">
        <button onClick={onBack} className="flex items-center gap-1 hover:text-[#0051a8] transition-colors">
           <ChevronLeft size={16} />
           <span>Back</span>
        </button>
        <span className="text-slate-200">|</span>
        <div className="flex items-center gap-2">
           <ShieldAlert size={16} />
           <span className="cursor-pointer hover:text-slate-600" onClick={onBack}>Roles</span>
           <ChevronRight size={14} className="text-slate-200" />
           <span className="text-slate-900 font-semibold">Create Role</span>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-900">Create Role</h1>
        <p className="text-sm text-slate-500">Set role name, select privileges and permissions.</p>
      </div>

      <div className="space-y-6">
        <div className="max-w-md">
          <label className="block text-sm font-medium text-slate-700 mb-2">Role name*</label>
          <input 
            type="text" 
            placeholder="Enter role name" 
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
          />
        </div>

        {/* Permissions Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm text-slate-600 border-collapse">
            <thead className="bg-slate-50/50 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left border-r border-slate-100 font-medium w-1/4">Menu Name</th>
                <th className="px-6 py-4 text-center border-r border-slate-100 font-medium">Full</th>
                <th className="px-6 py-4 text-center border-r border-slate-100 font-medium">Create</th>
                <th className="px-6 py-4 text-center border-r border-slate-100 font-medium">Edit</th>
                <th className="px-6 py-4 text-center border-r border-slate-100 font-medium">View</th>
                <th className="px-6 py-4 text-center font-medium">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {menuItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-4 border-r border-slate-100 font-medium text-slate-700">{item}</td>
                  <td className="px-6 py-4 border-r border-slate-100 text-center">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-[#0051a8] focus:ring-[#0051a8] cursor-pointer" />
                  </td>
                  <td className="px-6 py-4 border-r border-slate-100 text-center">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-[#0051a8] focus:ring-[#0051a8] cursor-pointer" />
                  </td>
                  <td className="px-6 py-4 border-r border-slate-100 text-center">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-[#0051a8] focus:ring-[#0051a8] cursor-pointer" />
                  </td>
                  <td className="px-6 py-4 border-r border-slate-100 text-center">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-[#0051a8] focus:ring-[#0051a8] cursor-pointer" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-[#0051a8] focus:ring-[#0051a8] cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button 
          className="px-10 py-3.5 rounded-lg text-sm font-bold text-white bg-[#0051a8] hover:bg-[#004185] transition-all shadow-lg shadow-[#0051a8]/10 active:scale-95"
        >
          Create Role
        </button>
      </div>
    </div>
  );
};

const RolesView: React.FC<{ onCreateRole: () => void }> = ({ onCreateRole }) => (
  <div className="p-8 space-y-6">
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Roles</h1>
        <p className="text-sm text-slate-500">Manage your roles, create roles, view roles and edit roles. Select privileges and set account permissions here.</p>
      </div>
    </div>

    {/* Actions Bar */}
    <div className="flex justify-between items-center border-t border-slate-100 pt-6">
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search role @olivia" 
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 transition-all"
        />
      </div>
      <button 
        onClick={onCreateRole}
        className="flex items-center gap-2 px-4 py-2.5 bg-[#0051a8] text-white rounded-lg text-sm font-semibold hover:bg-[#004185] transition-all active:scale-95 shadow-lg shadow-[#0051a8]/10"
      >
        <Plus size={18} />
        Create Role
      </button>
    </div>

    {/* Roles Table */}
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-sm text-slate-600 border-collapse">
        <thead className="bg-slate-50/50 text-slate-500 font-bold border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Name</th>
            <th className="px-6 py-4 text-left border-r border-slate-100 font-medium">Date Created</th>
            <th className="px-6 py-4 text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 border-r border-slate-100">Admin</td>
              <td className="px-6 py-4 border-r border-slate-100">11/07/2024 19:55:57</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-[#0051a8] transition-colors">
                    <Edit2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const AddBranchModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <Plus size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Add Branch</h2>
              <p className="text-sm text-slate-500">Fill in branch details.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
            <X size={20} />
          </button>
        </div>

        <form className="space-y-4 pt-4 border-t border-slate-100">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Name*</label>
            <input 
              type="text" 
              placeholder="Head Office" 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Code*</label>
            <input 
              type="text" 
              placeholder="000" 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Address*</label>
            <input 
              type="text" 
              placeholder="Lekki" 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Zone*</label>
            <input 
              type="text" 
              placeholder="LG" 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-2">Area*</label>
            <input 
              type="text" 
              placeholder="SW" 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0051a8]/10 focus:border-[#0051a8] transition-all"
            />
            <div className="absolute right-0 bottom-0 translate-y-2 translate-x-2">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-sm animate-pulse"></div>
            </div>
          </div>
        </form>
      </div>

      <div className="p-8 pt-4">
        <button 
          className="w-1/3 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#0051a8] hover:bg-[#004185] transition-all shadow-lg shadow-[#0051a8]/20 active:scale-[0.98]"
        >
          Add Branch
        </button>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group w-full text-left ${active ? 'bg-[#f0f7ff] text-[#0051a8]' : 'text-slate-600 hover:bg-slate-50'}`}
  >
    <span className={`${active ? 'text-[#0051a8]' : 'text-slate-400 group-hover:text-slate-600'}`}>{icon}</span>
    <span>{label}</span>
    {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#0051a8]"></div>}
  </button>
);

const QuickAccessCard: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <div className="bg-[#f0f7ff] hover:bg-[#e0efff] p-4 rounded-xl flex items-center gap-4 group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
    <div className="w-10 h-10 rounded-full bg-[#0051a8] text-white flex items-center justify-center shadow-lg shadow-[#0051a8]/20 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-sm font-semibold text-[#0051a8]">{label}</span>
    <ChevronRight size={16} className="ml-auto text-[#0051a8]/40 group-hover:translate-x-1 transition-transform" />
  </div>
);

const StatCard: React.FC<{ title: string, value: string, trend?: string, trendLabel?: string, icon: React.ReactNode, isWarning?: boolean, warningLabel?: string }> = ({ title, value, trend, trendLabel, icon, isWarning, warningLabel }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0051a8]/30 transition-colors">
    <div className="flex flex-col gap-4">
      {icon}
      <div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{value}</h4>
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
      {isWarning ? (
        <div className="flex items-center gap-1.5 text-orange-500 text-[11px] font-semibold">
          <History size={12} />
          {warningLabel}
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
           <div className="flex items-center text-green-500 text-[11px] font-bold">
              <ArrowUpRight size={12} className="mr-0.5" />
              {trend}
           </div>
           <span className="text-slate-400 text-[11px]">{trendLabel}</span>
        </div>
      )}
    </div>
  </div>
);

// @ts-ignore - defining missing TableRow component for DashboardOverview
const TableRow: React.FC<{ branch: string, type: string, qty: string, status: string, onView: () => void }> = ({ branch, type, qty, status, onView }) => {
  const statusColors: any = {
    'Ready': 'bg-green-50 text-green-600 border-green-200',
    'In Progress': 'bg-orange-50 text-orange-600 border-orange-200',
    'Acknowledged': 'bg-blue-50 text-blue-600 border-blue-200',
    'Pending': 'bg-slate-50 text-slate-400 border-slate-200'
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-4 py-3">{branch}</td>
      <td className="px-4 py-3">{type}</td>
      <td className="px-4 py-3">{qty}</td>
      <td className="px-4 py-3">
        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${statusColors[status] || statusColors['Pending']}`}>
          {status}
        </span>
      </td>
      <td className="px-4 py-3">
        <button onClick={onView} className="text-[#0051a8] font-bold text-xs hover:underline">View</button>
      </td>
    </tr>
  );
};

const DashboardOverview: React.FC<{ onNavigate: (tab: TabType) => void }> = ({ onNavigate }) => (
  <div className="p-8 space-y-8">
    <div className="flex justify-between items-end">
      <div>
         <h1 className="text-2xl font-bold text-slate-900">Hi Nazeer, what would you like to do today?</h1>
         <p className="text-sm text-slate-500 mt-1">Last login: 26/11/2024 14:39:58</p>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
         <Calendar size={16} className="text-slate-400" />
         <span className="font-medium">Today</span>
         <span className="text-slate-300">|</span>
         <span className="text-slate-500">11 Nov 2024</span>
      </div>
    </div>

    <section>
      <h2 className="text-sm font-bold text-slate-800 mb-4">Your Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickAccessCard icon={<CreditCard size={20} />} label="Manage a Card" />
        <QuickAccessCard icon={<Package size={20} />} label="Issue Instant Card" />
        <QuickAccessCard icon={<UserCircle size={20} />} label="Issue Personalized Card" />
        <QuickAccessCard icon={<ListChecks size={20} />} label="Review Card Requests" />
      </div>
    </section>

    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-4">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <StatCard 
           title="Total Active Cards" 
           value="26,478" 
           trend="+9%" 
           trendLabel="this month"
           icon={<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center"><CreditCard size={20}/></div>}
         />
         <StatCard 
           title="Total Personalized Cards" 
           value="15,703" 
           trend="+8.5%" 
           trendLabel="this month"
           icon={<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center"><UserCircle size={20}/></div>}
         />
         <StatCard 
           title="Today's Revenue" 
           value="₦9.3M" 
           trend="+6%" 
           trendLabel="vs yesterday"
           icon={<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><div className="font-bold">₦</div></div>}
         />
         <StatCard 
           title="Pending Requests" 
           value="38" 
           isWarning
           warningLabel="Requires attention"
           icon={<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center"><History size={20}/></div>}
         />
      </div>
    </section>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
        <h3 className="font-bold text-slate-800 mb-8">Monthly Issuance</h3>
        <div className="flex-1 flex flex-col justify-end min-h-[300px]">
          <div className="flex justify-between items-end gap-2 h-full pb-2 relative">
             <div className="absolute left-0 h-full flex flex-col justify-between text-[10px] text-slate-400 -ml-8">
               <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
             </div>
             {[
               { m: 'May', p: 15, i: 35 }, { m: 'Jun', p: 30, i: 55 }, { m: 'Jul', p: 10, i: 25 },
               { m: 'Aug', p: 18, i: 45 }, { m: 'Sep', p: 15, i: 35 }, { m: 'Oct', p: 25, i: 60 },
               { m: 'Nov', p: 15, i: 55 }
             ].map((d, idx) => (
               <div key={idx} className="flex-1 flex flex-col items-center group relative">
                  <div className="w-8 rounded-md bg-[#dbeafe] overflow-hidden flex flex-col-reverse relative transition-all duration-300 hover:scale-x-110" style={{ height: `${d.p + d.i}%` }}>
                     <div className="w-full bg-[#0051a8]" style={{ height: `${(d.p / (d.p + d.i)) * 100}%` }}></div>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-3 font-medium">{d.m}</span>
               </div>
             ))}
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#0051a8]"></div>
            <span className="text-xs text-slate-500">Personalized</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#dbeafe]"></div>
            <span className="text-xs text-slate-500">Instant</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800 cursor-pointer hover:text-[#0051a8] transition-colors" onClick={() => onNavigate('card-request')}>Recent Card Requests</h3>
          <button onClick={() => onNavigate('card-request')} className="text-slate-400 hover:text-slate-600 transition-colors"><Maximize2 size={16}/></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#f8fafc] text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Branch</th>
                <th className="px-4 py-3 text-left Card Type">Card Type</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <TableRow branch="Corporate" type="Instant" qty="10" status="Ready" onView={() => onNavigate('card-request')} />
              <TableRow branch="Corporate" type="Personalized" qty="10" status="In Progress" onView={() => onNavigate('card-request')} />
              <TableRow branch="Corporate" type="Personalized" qty="10" status="Acknowledged" onView={() => onNavigate('card-request')} />
              <TableRow branch="Corporate" type="Instant" qty="10" status="Pending" onView={() => onNavigate('card-request')} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

const UploadModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white rounded-3xl w-full max-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <Upload size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Upload CSV File</h2>
              <p className="text-sm text-slate-500">CSV file should contain the following columns</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
            <X size={20} />
          </button>
        </div>

        <ul className="grid grid-cols-3 gap-2 text-sm text-slate-600 mb-8 pl-16">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>Name</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>Code</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>Address</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>Zone</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>Area</li>
        </ul>

        <div className="border-2 border-dashed border-[#0051a8]/30 bg-slate-50/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-[#0051a8]/5 hover:border-[#0051a8] transition-all relative">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0051a8] mb-4 group-hover:scale-110 transition-transform">
            <Upload size={20} />
          </div>
          <p className="text-slate-900 font-semibold mb-1">
            <span className="text-[#0051a8] hover:underline">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-slate-400 font-medium">CSV, XSLX (max. 10mb)</p>
          
          <div className="absolute right-6 bottom-6 opacity-40 group-hover:opacity-100 transition-opacity">
            <FileSpreadsheet className="text-[#22c55e]" size={32} />
          </div>
        </div>

        {/* Selected File Section */}
        <div className="mt-6 p-4 border border-slate-100 rounded-2xl bg-white shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 relative overflow-hidden">
             <FileSpreadsheet size={20} />
             <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20"></div>
             <div className="absolute bottom-0 left-0 text-[6px] font-bold bg-green-500 text-white px-0.5 rounded-tr-sm">CSV</div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-2">
               <div>
                 <p className="text-sm font-semibold text-slate-900 truncate">New Branches FINAL.csv</p>
                 <p className="text-xs text-slate-400 font-medium">4.2 MB</p>
               </div>
               <button className="text-slate-300 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
               </button>
            </div>
            <div className="flex items-center gap-3">
               <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0051a8] w-[80%] rounded-full transition-all duration-1000"></div>
               </div>
               <span className="text-xs font-bold text-slate-400">80%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex gap-4">
        <button 
          onClick={onClose}
          className="flex-1 py-3 px-4 rounded-xl text-sm font-bold text-slate-600 border border-slate-200 hover:bg-white transition-all active:scale-[0.98]"
        >
          Cancel
        </button>
        <button 
          className="flex-1 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#0051a8] hover:bg-[#004185] transition-all shadow-lg shadow-[#0051a8]/20 active:scale-[0.98]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Dashboard;