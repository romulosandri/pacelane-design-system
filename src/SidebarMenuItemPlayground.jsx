import React, { useState } from 'react';
import SidebarMenuItem from './design-system/components/SidebarMenuItem.jsx';
import { 
  Home, 
  Settings, 
  User, 
  Bell, 
  Search, 
  ChevronRight,
  File,
  Calendar,
  Mail,
  Folder
} from 'lucide-react';

const SidebarMenuItemPlayground = () => {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'files', icon: File, label: 'Files' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'mail', icon: Mail, label: 'Messages' },
    { id: 'folders', icon: Folder, label: 'Folders' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <div style={{ 
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '32px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '700', 
          marginBottom: '8px',
          color: '#1e293b'
        }}>
          SidebarMenuItem Component
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#64748b',
          marginBottom: '32px'
        }}>
          Menu items for sidebar navigation with active states (bold text, border, shadow) and icon-only variants
        </p>

        <div style={{ 
          display: 'grid', 
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}>
          
          {/* Default Variant - Interactive Demo */}
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <h2 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              Default Variant - Interactive
            </h2>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              backgroundColor: '#f8fafc',
              padding: '16px',
              borderRadius: '8px',
              width: '240px'
            }}>
              {menuItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  variant="default"
                  state={activeItem === item.id ? 'active' : 'default'}
                  leadIcon={<item.icon />}
                  label={item.label}
                  trailingIcon={<ChevronRight />}
                  onClick={() => handleItemClick(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Icon Only Variant */}
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <h2 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              Icon Only Variant
            </h2>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              backgroundColor: '#f8fafc',
              padding: '16px',
              borderRadius: '8px',
              width: 'fit-content'
            }}>
              {menuItems.slice(0, 4).map((item) => (
                <SidebarMenuItem
                  key={`icon-${item.id}`}
                  variant="iconOnly"
                  state={activeItem === item.id ? 'active' : 'default'}
                  leadIcon={<item.icon />}
                  onClick={() => handleItemClick(item.id)}
                />
              ))}
            </div>
          </div>

          {/* State Examples */}
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <h2 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              State Examples
            </h2>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#475569' }}>
                  Default State
                </h3>
                <SidebarMenuItem
                  variant="default"
                  state="default"
                  leadIcon={<User />}
                  label="Default State"
                  trailingIcon={<ChevronRight />}
                />
              </div>
              
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#475569' }}>
                  Active State (with shadow, border & bold text)
                </h3>
                <SidebarMenuItem
                  variant="default"
                  state="active"
                  leadIcon={<Bell />}
                  label="Active State"
                  trailingIcon={<ChevronRight />}
                />
              </div>
              
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#475569' }}>
                  Disabled State
                </h3>
                <SidebarMenuItem
                  variant="default"
                  state="default"
                  leadIcon={<Search />}
                  label="Disabled State"
                  trailingIcon={<ChevronRight />}
                  disabled={true}
                />
              </div>
            </div>
          </div>

          {/* Without Trailing Icon */}
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <h2 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              Without Trailing Icon
            </h2>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              backgroundColor: '#f8fafc',
              padding: '16px',
              borderRadius: '8px',
              width: '200px'
            }}>
              <SidebarMenuItem
                variant="default"
                state="default"
                leadIcon={<Home />}
                label="Home"
              />
              <SidebarMenuItem
                variant="default"
                state="active"
                leadIcon={<Settings />}
                label="Settings"
              />
              <SidebarMenuItem
                variant="default"
                state="default"
                leadIcon={<User />}
                label="Profile"
              />
            </div>
          </div>

        </div>

        {/* Usage Code Example */}
        <div style={{ 
          marginTop: '48px',
          padding: '24px', 
          backgroundColor: 'white', 
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            marginBottom: '16px',
            color: '#1e293b'
          }}>
            Usage Example
          </h2>
          <pre style={{ 
            backgroundColor: '#f8fafc',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            color: '#475569',
            fontFamily: 'JetBrains Mono, Consolas, monospace'
          }}>
{`import SidebarMenuItem from 'src/design-system/components/SidebarMenuItem.jsx';
import { Home, ChevronRight } from 'lucide-react';

// Default variant with all elements
<SidebarMenuItem
  variant="default"
  state="active"
  leadIcon={<Home />}
  label="Home"
  trailingIcon={<ChevronRight />}
  onClick={handleClick}
/>

// Icon only variant
<SidebarMenuItem
  variant="iconOnly"
  state="default"
  leadIcon={<Home />}
  onClick={handleClick}
/>

// Without trailing icon
<SidebarMenuItem
  variant="default"
  leadIcon={<Home />}
  label="Home"
  onClick={handleClick}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenuItemPlayground;