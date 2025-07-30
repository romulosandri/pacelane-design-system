import React from 'react';
import TemplateCard from './design-system/components/TemplateCard.jsx';
import { spacing } from './design-system/tokens/spacing.js';

const TemplateCardPlayground = () => {
  const handleCardClick = (variant, title) => {
    console.log(`Clicked ${variant} card: ${title}`);
  };

  return (
    <div style={{ 
      padding: spacing.spacing[32],
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
    }}>
      <h1 style={{ 
        marginBottom: spacing.spacing[32],
        fontSize: '32px',
        fontWeight: 600,
      }}>
        TemplateCard Component Playground
      </h1>

      {/* Default State */}
      <section style={{ marginBottom: spacing.spacing[48] }}>
        <h2 style={{ 
          marginBottom: spacing.spacing[24],
          fontSize: '24px',
          fontWeight: 500,
        }}>
          Default State
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: spacing.spacing[24],
          flexWrap: 'wrap',
        }}>
          <TemplateCard
            variant="default"
            title="Landing Page"
            description="Create a beautiful landing page with hero sections and call-to-action buttons."
            bichaurinhoVariant={1}
            onClick={() => handleCardClick('default', 'Landing Page')}
          />
          <TemplateCard
            variant="default"
            title="Portfolio"
            description="Showcase your work with an elegant portfolio template."
            bichaurinhoVariant={5}
            onClick={() => handleCardClick('default', 'Portfolio')}
          />
          <TemplateCard
            variant="default"
            title="Blog"
            description="Start a blog with clean typography and reading experience."
            bichaurinhoVariant={12}
            onClick={() => handleCardClick('default', 'Blog')}
          />
        </div>
      </section>

      {/* Hover State */}
      <section style={{ marginBottom: spacing.spacing[48] }}>
        <h2 style={{ 
          marginBottom: spacing.spacing[24],
          fontSize: '24px',
          fontWeight: 500,
        }}>
          Hover State (Static)
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: spacing.spacing[24],
          flexWrap: 'wrap',
        }}>
          <TemplateCard
            variant="hover"
            title="E-commerce"
            description="Build an online store with shopping cart and checkout flow."
            bichaurinhoVariant={8}
            onClick={() => handleCardClick('hover', 'E-commerce')}
          />
          <TemplateCard
            variant="hover"
            title="Dashboard"
            description="Create data visualizations and analytics dashboard."
            bichaurinhoVariant={15}
            onClick={() => handleCardClick('hover', 'Dashboard')}
          />
        </div>
      </section>

      {/* Empty State */}
      <section style={{ marginBottom: spacing.spacing[48] }}>
        <h2 style={{ 
          marginBottom: spacing.spacing[24],
          fontSize: '24px',
          fontWeight: 500,
        }}>
          Empty State
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: spacing.spacing[24],
          flexWrap: 'wrap',
        }}>
          <TemplateCard
            variant="empty"
            onClick={() => handleCardClick('empty', 'Start from Scratch')}
          />
        </div>
      </section>

      {/* Interactive Examples */}
      <section style={{ marginBottom: spacing.spacing[48] }}>
        <h2 style={{ 
          marginBottom: spacing.spacing[24],
          fontSize: '24px',
          fontWeight: 500,
        }}>
          Interactive Examples (Hover to see effects)
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: spacing.spacing[24],
          flexWrap: 'wrap',
        }}>
          <TemplateCard
            variant="default"
            title="Newsletter"
            description="Design a beautiful newsletter template with email campaigns."
            bichaurinhoVariant={20}
            onClick={() => handleCardClick('interactive', 'Newsletter')}
          />
          <TemplateCard
            variant="default"
            title="Mobile App"
            description="Create mobile app screens with modern UI patterns."
            bichaurinhoVariant={25}
            onClick={() => handleCardClick('interactive', 'Mobile App')}
          />
          <TemplateCard
            variant="empty"
            onClick={() => handleCardClick('interactive', 'Custom Template')}
          />
        </div>
      </section>

      {/* Non-interactive Examples */}
      <section>
        <h2 style={{ 
          marginBottom: spacing.spacing[24],
          fontSize: '24px',
          fontWeight: 500,
        }}>
          Non-interactive Examples (No onClick)
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: spacing.spacing[24],
          flexWrap: 'wrap',
        }}>
          <TemplateCard
            variant="default"
            title="Coming Soon"
            description="This template will be available soon."
            bichaurinhoVariant={30}
          />
          <TemplateCard
            variant="empty"
          />
        </div>
      </section>
    </div>
  );
};

export default TemplateCardPlayground;