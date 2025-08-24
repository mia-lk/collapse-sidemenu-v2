import React, { useState } from 'react';
import './styles/index.css';

// Icon component for Material Symbols
const Icon: React.FC<{ name: string; size?: string; style?: React.CSSProperties }> = ({ 
  name, 
  size = '20px',
  style = {}
}) => (
  <span 
    className="material-symbols-outlined" 
    style={{ fontSize: size, color: '#637177', ...style }}
  >
    {name}
  </span>
);

// Beta tag component
const BetaTag: React.FC = () => (
  <span style={{
    display: 'flex',
    height: 'var(--components-tag-medium-size, 28px)',
    minHeight: 'var(--components-tag-medium-size, 28px)',
    alignItems: 'center',
    borderRadius: 'var(--radius-weak, 3px)',
    backgroundColor: 'rgba(30, 105, 118, 0.08)',
    padding: '0 8px',
    marginLeft: 'auto',
    color: 'var(--text-base-default, #01151D)',
    fontFamily: 'var(--type-bodySmall-typeface, "Source Sans Pro")',
    fontSize: 'var(--type-bodySmall-size, 14px)',
    fontStyle: 'normal',
    fontWeight: 'var(--type-bodySmall-weight, 400)',
    lineHeight: 'var(--type-bodySmall-lineHeight, 20px)',
    letterSpacing: 'var(--type-body-letterSpacing, -0.04px)'
  }}>
    Beta
  </span>
);

// Main Sidemenu Component
const Sidemenu: React.FC<{ 
  isCollapsed: boolean; 
  onToggle: () => void; 
  onNavigate: (page: string) => void;
  currentPage: string;
}> = ({ isCollapsed, onToggle, onNavigate, currentPage }) => {
  const menuItems = [
    { name: 'New chat', icon: 'add_circle', action: () => onNavigate('home'), isActive: currentPage === 'home' },
    { name: 'Library', icon: 'library_books', action: () => onNavigate('home'), isActive: false },
    { name: 'Tech support', icon: 'confirmation_number', action: () => onNavigate('tech-support'), hasBeta: true, isActive: currentPage === 'tech-support' },
    { name: 'Projects', icon: 'business_center', action: () => onNavigate('home'), hasBeta: true, isActive: false },
    { name: 'Assistants', icon: 'smart_toy', action: () => onNavigate('home'), hasBeta: true, isActive: false },
    { name: 'Chat history', icon: 'history', action: () => onNavigate('home'), isActive: false },
    { name: 'Your pins', icon: 'push_pin', action: () => onNavigate('home'), isActive: false },
  ];

  const bottomMenuItems = [
    { name: 'Build with Us', icon: 'description', action: () => onNavigate('home'), hasBeta: true },
    { name: 'Access our API', icon: 'webhook', action: () => onNavigate('home') },
  ];

  return (
    <div style={{
      width: isCollapsed ? '140px' : '312px',
      height: '100vh',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #ced5d8',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width 0.3s ease',
      position: currentPage === 'tech-support' ? 'absolute' : 'relative',
      left: currentPage === 'tech-support' ? '0' : 'auto',
      top: currentPage === 'tech-support' ? '0' : 'auto',
      zIndex: currentPage === 'tech-support' ? 4 : 3
    }}>
      {/* Brand Section */}
      <div style={{ padding: '40px 40px 0 40px' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: isCollapsed ? 'column' : 'row',
          alignItems: isCollapsed ? 'center' : 'center', 
          gap: isCollapsed ? '24px' : '12px', 
          marginBottom: '24px' 
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flex: isCollapsed ? 'none' : 1
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#E31E24',
              borderRadius: '50%',
              flexShrink: 0,
              marginLeft: '8px'
            }} />
            <span style={{
              fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
              fontSize: '16px',
              color: '#01151d',
              fontWeight: '400',
              letterSpacing: '-0.04px'
            }}>
              GPT
            </span>
          </div>
          {!isCollapsed && (
            <button
              onClick={onToggle}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 'auto'
              }}
            >
              <Icon name="left_panel_close" size="20px" />
            </button>
          )}
        </div>
      </div>

      {/* Collapse Button (Collapsed Mode Only) */}
      {isCollapsed && (
        <div style={{ padding: '0 40px 24px 40px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            marginBottom: '0' 
          }}>
            <button
              onClick={onToggle}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Icon name="left_panel_open" size="20px" />
            </button>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div style={{ flex: 1, padding: '0 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              style={{
                width: 'calc(100% + 16px)',
                height: isCollapsed ? 'auto' : '44px',
                minHeight: isCollapsed ? '44px' : '44px',
                background: item.isActive ? '#f6f9fa' : 'none',
                border: 'none',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: isCollapsed ? 'column' : 'row',
                alignItems: isCollapsed ? 'center' : 'center',
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                padding: isCollapsed ? '8px 16px' : '0 16px',
                marginLeft: '-8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                color: item.isActive ? '#01151d' : '#56656b',
                gap: isCollapsed ? '8px' : '8px'
              }}
              onMouseEnter={(e) => {
                if (!item.isActive) {
                  e.currentTarget.style.backgroundColor = 'var(--surface-utilities-overlays-hover, rgba(9, 119, 158, 0.07))';
                }
              }}
              onMouseLeave={(e) => {
                if (!item.isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                } else {
                  e.currentTarget.style.backgroundColor = '#f6f9fa';
                }
              }}
            >
              <Icon name={item.icon} size="20px" style={{ color: item.isActive ? '#09779e' : '#637177' }} />
              {isCollapsed ? (
                <span style={{
                  color: item.isActive ? '#01151d' : 'var(--text-base-subdued, #56656B)',
                  fontFamily: 'var(--type-bodySmall-typeface, "Source Sans Pro")',
                  fontSize: 'var(--type-bodySmall-size, 14px)',
                  fontStyle: 'normal',
                  fontWeight: 'var(--type-bodySmall-weight, 400)',
                  lineHeight: 'var(--type-bodySmall-lineHeight, 20px)',
                  letterSpacing: 'var(--type-bodySmall-letterSpacing, -0.04px)',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}>
                  {item.name}
                </span>
              ) : (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                  marginLeft: '8px'
                }}>
                  <span style={{
                    overflow: 'hidden',
                    color: 'var(--text-base-subdued, #56656B)',
                    textOverflow: 'ellipsis',
                    fontFamily: 'var(--type-body-typeface, "Source Sans Pro")',
                    fontSize: 'var(--type-body-size, 16px)',
                    fontStyle: 'normal',
                    fontWeight: 'var(--type-body-weight, 400)',
                    lineHeight: 'var(--type-body-lineHeight, 24px)',
                    letterSpacing: 'var(--type-body-letterSpacing, -0.04px)',
                    textAlign: 'left'
                  }}>
                    {item.name}
                  </span>
                  {item.hasBeta && <BetaTag />}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

            {/* Separator Line */}
      <div style={{ height: '1px', backgroundColor: '#dfe5e8', width: '100%' }} />

      {/* Bottom Menu Items */}
      {!isCollapsed && (
        <div style={{ padding: '24px 40px 24px 40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {bottomMenuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                style={{
                  width: 'calc(100% + 16px)',
                  height: '44px',
                  background: 'none',
                  border: 'none',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 16px',
                  marginLeft: '-8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                  color: '#56656b'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--surface-utilities-overlays-hover, rgba(9, 119, 158, 0.07))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Icon name={item.icon} size="20px" />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                  marginLeft: '8px'
                }}>
                  <span style={{
                    overflow: 'hidden',
                    color: 'var(--text-base-subdued, #56656B)',
                    textOverflow: 'ellipsis',
                    fontFamily: 'var(--type-body-typeface, "Source Sans Pro")',
                    fontSize: 'var(--type-body-size, 16px)',
                    fontStyle: 'normal',
                    fontWeight: 'var(--type-body-weight, 400)',
                    lineHeight: 'var(--type-body-lineHeight, 24px)',
                    letterSpacing: 'var(--type-body-letterSpacing, -0.04px)',
                    textAlign: 'left'
                  }}>
                    {item.name}
                  </span>
                  {item.hasBeta && <BetaTag />}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Separator Line */}
      {!isCollapsed && (
        <div style={{ height: '1px', backgroundColor: '#dfe5e8', width: '100%' }} />
      )}

      {/* User Avatar */}
      <div style={{ padding: '24px 40px 24px 40px' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: isCollapsed ? 'column' : 'row',
          alignItems: isCollapsed ? 'center' : 'center', 
          gap: isCollapsed ? '8px' : '12px' 
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#dfe5e8',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }} />
          {!isCollapsed && (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              flex: 1,
              gap: '0px'
            }}>
              <div style={{
                color: 'var(--text-base-default, #01151D)',
                fontFamily: 'var(--type-body-typeface, "Source Sans Pro")',
                fontSize: 'var(--type-body-size, 16px)',
                fontStyle: 'normal',
                fontWeight: 'var(--type-body-weight, 400)',
                lineHeight: 'var(--type-body-lineHeight, 24px)',
                letterSpacing: 'var(--type-body-letterSpacing, -0.04px)'
              }}>
                Maria LaGuerta
              </div>
              <div style={{
                color: 'var(--text-base-subdued, #56656B)',
                fontFamily: 'var(--type-body-typeface, "Source Sans Pro")',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 'var(--type-body-weight, 400)',
                lineHeight: 'var(--type-body-lineHeight, 24px)',
                letterSpacing: 'var(--type-body-letterSpacing, -0.04px)'
              }}>
                Product Designer
              </div>
            </div>
          )}
          {!isCollapsed && (
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Icon name="keyboard_arrow_down" size="20px" />
            </button>
          )}
        </div>
      </div>

      {/* Separator Line */}
      {!isCollapsed && (
        <div style={{ height: '1px', backgroundColor: '#dfe5e8', width: '100%' }} />
      )}

      {/* Copyright */}
      {!isCollapsed && (
        <div style={{ 
          padding: '24px 40px 24px 40px',
          color: 'var(--text-base-subdued, #56656B)',
          fontFamily: 'var(--type-annotation-default-typeface, "Source Sans Pro")',
          fontSize: 'var(--type-annotation-default-size, 12px)',
          fontStyle: 'normal',
          fontWeight: 'var(--type-annotation-default-weight, 400)',
          lineHeight: 'var(--type-annotation-default-lineHeight, 16px)',
          letterSpacing: 'var(--type-annotation-default-letterSpacing, 0)',
          textAlign: 'center'
        }}>
          Copyright © 2025 - Powered by Cursor
        </div>
      )}
    </div>
  );
};

// Secondary Sidemenu Component (Tech Support)
const SecondarySidemenu: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [activeChat, setActiveChat] = useState<string | null>('Talk to a human');

  const mainMenuItems = [
    { name: 'New support chat', icon: 'add_circle', isActive: false },
    { name: 'Your tickets', icon: 'confirmation_number', isActive: false, hasExternalLink: true },
    { name: 'Talk to a human', icon: 'support_agent', isActive: activeChat === 'Talk to a human' }
  ];

  const chatItems = [
    'Need Adobe access',
    'My mouse broke',
    'License expired',
    'Contract review',
    'Finance request',
    'New phone setup'
  ];

  return (
    <div style={{
      width: '240px',
      height: '100vh',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #dfe5e8',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      left: isVisible ? '140px' : '-240px',
      top: 0,
      transition: 'left 0.3s ease',
      zIndex: 2
    }}>
      {/* Brand Section */}
      <div style={{ padding: '24px 24px 0 24px' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '24px',
          marginBottom: '24px' 
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{
              fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
              fontSize: '20px',
              color: '#01151d',
              fontWeight: '400',
              letterSpacing: '-0.1px',
              lineHeight: '28px'
            }}>
              Tech Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Menu Items */}
      <div style={{ padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {mainMenuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => item.name === 'Talk to a human' && setActiveChat(item.name)}
              style={{
                width: '100%',
                height: '44px',
                background: item.isActive ? '#f6f9fa' : 'none',
                border: 'none',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                color: item.isActive ? '#01151d' : '#56656b',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                if (!item.isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(9, 119, 158, 0.07)';
                }
              }}
              onMouseLeave={(e) => {
                if (!item.isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                } else {
                  e.currentTarget.style.backgroundColor = '#f6f9fa';
                }
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flex: 1
              }}>
                <Icon name={item.icon} size="20px" style={{ color: item.isActive ? '#09779e' : '#637177' }} />
                <span style={{
                  fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
                  fontSize: '16px',
                  fontWeight: '400',
                  letterSpacing: '-0.04px',
                  lineHeight: '24px',
                  textAlign: 'left',
                  color: item.isActive ? '#01151d' : '#56656b'
                }}>
                  {item.name}
                </span>
              </div>
              {item.hasExternalLink && (
                <Icon name="open_in_new" size="16px" style={{ color: '#637177' }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div style={{ padding: '24px 24px 0 24px' }}>
        <div style={{
          height: '1px',
          backgroundColor: '#dfe5e8',
          width: '100%'
        }} />
      </div>

      {/* Chat Section */}
      <div style={{ padding: '24px 24px 0 24px', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {/* Section Header */}
          <div style={{
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px'
          }}>
            <span style={{
              fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
              fontSize: '14px',
              fontWeight: '400',
              letterSpacing: '-0.04px',
              lineHeight: '20px',
              textAlign: 'left',
              color: '#56656b',
              textTransform: 'uppercase'
            }}>
              CHATS
            </span>
          </div>

          {/* Chat Items */}
          {chatItems.map((chat, index) => (
            <button
              key={index}
              onClick={() => setActiveChat(chat)}
              style={{
                width: '100%',
                height: '44px',
                background: activeChat === chat ? '#f6f9fa' : 'none',
                border: 'none',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                color: activeChat === chat ? '#01151d' : '#56656b'
              }}
              onMouseEnter={(e) => {
                if (activeChat !== chat) {
                  e.currentTarget.style.backgroundColor = 'rgba(9, 119, 158, 0.07)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeChat !== chat) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                } else {
                  e.currentTarget.style.backgroundColor = '#f6f9fa';
                }
              }}
            >
              <span style={{
                fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
                fontSize: '16px',
                fontWeight: '400',
                letterSpacing: '-0.04px',
                lineHeight: '24px',
                textAlign: 'left',
                color: activeChat === chat ? '#01151d' : '#56656b'
              }}>
                {chat}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Homepage Component
const Homepage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div style={{
      flex: 1,
      padding: '40px',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
          fontSize: '32px',
          fontWeight: '400',
          color: '#01151d',
          marginBottom: '16px',
          letterSpacing: '-0.06px',
          lineHeight: '40px'
        }}>
          Welcome back, Maria
        </h1>
        
        <p style={{
          fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
          fontSize: '16px',
          color: '#56656b',
          marginBottom: '32px',
          letterSpacing: '-0.04px',
          lineHeight: '24px'
        }}>
          How can I help you today?
        </p>

        {/* Chat Input */}
        <div style={{
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto 32px auto',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="Ask anything..."
            style={{
              width: '100%',
              height: '56px',
              padding: '16px 20px',
              border: '1px solid #ced5d8',
              borderRadius: '8px',
              fontSize: '16px',
              fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
              outline: 'none',
              backgroundColor: '#ffffff'
            }}
          />
          <button
            onClick={() => onNavigate('tech-support')}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon name="send" size="20px" />
          </button>
        </div>

        {/* Action Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          width: '100%',
          maxWidth: '600px'
        }}>
          <button
            onClick={() => onNavigate('tech-support')}
            style={{
              padding: '24px',
              backgroundColor: '#f6f9fa',
              border: '1px solid #dfe5e8',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textAlign: 'left'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e8f0f3';
              e.currentTarget.style.borderColor = '#ced5d8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f6f9fa';
              e.currentTarget.style.borderColor = '#dfe5e8';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <Icon name="confirmation_number" size="24px" />
              <span style={{
                marginLeft: '12px',
                fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
                fontSize: '18px',
                fontWeight: '400',
                color: '#01151d'
              }}>
                Ask for Tech Support
              </span>
            </div>
            <p style={{
              fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
              fontSize: '14px',
              color: '#56656b',
              margin: 0,
              lineHeight: '20px'
            }}>
              Get help with technical issues and questions
            </p>
          </button>

          <button
            style={{
              padding: '24px',
              backgroundColor: '#f6f9fa',
              border: '1px solid #dfe5e8',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textAlign: 'left'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e8f0f3';
              e.currentTarget.style.borderColor = '#ced5d8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f6f9fa';
              e.currentTarget.style.borderColor = '#dfe5e8';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <Icon name="business_center" size="24px" />
              <span style={{
                marginLeft: '12px',
                fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
                fontSize: '18px',
                fontWeight: '400',
                color: '#01151d'
              }}>
                Create projects
              </span>
            </div>
            <p style={{
              fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
              fontSize: '14px',
              color: '#56656b',
              margin: 0,
              lineHeight: '20px'
            }}>
              Start new projects and collaborate with your team
            </p>
          </button>

          <button
            style={{
              padding: '24px',
              backgroundColor: '#f6f9fa',
              border: '1px solid #dfe5e8',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textAlign: 'left'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e8f0f3';
              e.currentTarget.style.borderColor = '#ced5d8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f6f9fa';
              e.currentTarget.style.borderColor = '#dfe5e8';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <Icon name="library_books" size="24px" />
              <span style={{
                marginLeft: '12px',
                fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
                fontSize: '18px',
                fontWeight: '400',
                color: '#01151d'
              }}>
                Explore library
              </span>
            </div>
            <p style={{
              fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
              fontSize: '14px',
              color: '#56656b',
              margin: 0,
              lineHeight: '20px'
            }}>
              Browse resources, templates, and documentation
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

// Tech Support Page Component
const TechSupportPage: React.FC = () => {
  return (
    <div style={{
      flex: 1,
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{
        padding: '24px 32px',
        borderBottom: '1px solid #dfe5e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h1 style={{
          fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
          fontSize: '24px',
          fontWeight: '400',
          color: '#01151d',
          margin: 0,
          letterSpacing: '-0.06px',
          lineHeight: '32px'
        }}>
          Tech Support
        </h1>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button style={{
            width: '36px',
            height: '36px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon name="search" size="20px" />
          </button>
          <button style={{
            width: '36px',
            height: '36px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon name="bookmark" size="20px" />
          </button>
          <button style={{
            height: '44px',
            padding: '0 16px',
            backgroundColor: 'rgba(30, 105, 118, 0.08)',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
            fontSize: '16px',
            color: '#01151d'
          }}>
            Cancel
          </button>
          <button style={{
            height: '44px',
            padding: '0 16px',
            backgroundColor: '#01151d',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
            fontSize: '16px',
            color: '#ffffff'
          }}>
            Submit Ticket
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: '0 32px' }}>
        <div style={{
          display: 'flex',
          gap: '24px',
          borderBottom: '1px solid #ced5d8'
        }}>
          <button style={{
            padding: '0 0 24px 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
            fontSize: '16px',
            color: '#56656b',
            borderBottom: '1px solid #01151d'
          }}>
            General Support
          </button>
          <button style={{
            padding: '0 0 24px 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
            fontSize: '16px',
            color: '#56656b'
          }}>
            Technical Issues
          </button>
          <button style={{
            padding: '0 0 24px 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
            fontSize: '16px',
            color: '#56656b'
          }}>
            Account Management
          </button>
          <button style={{
            padding: '0 0 24px 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
            fontSize: '16px',
            color: '#56656b'
          }}>
            Feature Requests
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div style={{
        flex: 1,
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center'
        }}>
          <Icon name="support_agent" size="64px" />
          <h2 style={{
            fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
            fontSize: '24px',
            fontWeight: '400',
            color: '#01151d',
            margin: '24px 0 16px 0'
          }}>
            How can we help you?
          </h2>
          <p style={{
            fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
            fontSize: '16px',
            color: '#56656b',
            marginBottom: '32px',
            lineHeight: '24px'
          }}>
            Select a category from the left sidebar to get started with your support request.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginTop: '32px'
          }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#f6f9fa',
              border: '1px solid #dfe5e8',
              borderRadius: '8px',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <Icon name="priority_high" size="24px" />
                <span style={{
                  marginLeft: '12px',
                  fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#01151d'
                }}>
                  Urgent Issues
                </span>
              </div>
              <p style={{
                fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
                fontSize: '14px',
                color: '#56656b',
                margin: 0,
                lineHeight: '20px'
              }}>
                For critical problems affecting your work
              </p>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#f6f9fa',
              border: '1px solid #dfe5e8',
              borderRadius: '8px',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <Icon name="schedule" size="24px" />
                <span style={{
                  marginLeft: '12px',
                  fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#01151d'
                }}>
                  General Questions
                </span>
              </div>
              <p style={{
                fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
                fontSize: '14px',
                color: '#56656b',
                margin: 0,
                lineHeight: '20px'
              }}>
                For general inquiries and guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [isSidemenuCollapsed, setIsSidemenuCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleToggleSidemenu = () => {
    setIsSidemenuCollapsed(!isSidemenuCollapsed);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page === 'tech-support') {
      setIsSidemenuCollapsed(true);
    }
  };

  const getMainContentMargin = () => {
    if (currentPage === 'tech-support') {
      return '380px'; // Always 380px for tech support page, regardless of main menu state
    }
    return isSidemenuCollapsed ? '140px' : '312px';
  };

  return (
    <div style={{
      fontFamily: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      position: 'relative'
    }}>

      {/* Main Sidemenu */}
      <Sidemenu
        isCollapsed={isSidemenuCollapsed}
        onToggle={handleToggleSidemenu}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Secondary Sidemenu (Tech Support) */}
      <SecondarySidemenu isVisible={currentPage === 'tech-support'} />

      {/* Main Content */}
      <div style={{
        flex: 1,
        marginLeft: getMainContentMargin(),
        transition: 'margin-left 0.3s ease',
        minHeight: '100vh'
      }}>
        {currentPage === 'home' ? (
          <Homepage onNavigate={handleNavigate} />
        ) : (
          <TechSupportPage />
        )}
      </div>
    </div>
  );
};

export default App;