import React, { useState } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { spacing } from '../design-system/tokens/spacing.js';
import { cornerRadius } from '../design-system/tokens/corner-radius.js';
import { getShadow } from '../design-system/tokens/shadows.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { typography } from '../design-system/tokens/typography.js';

// Design System Components
import Button from '../design-system/components/Button.jsx';
import Badge from '../design-system/components/Badge.jsx';
import ProgressBar from '../design-system/components/ProgressBar.jsx';

// Icons
import { 
  Settings,
  CreditCard,
  Check
} from 'lucide-react';

/**
 * PlanBillingPage component - Displays current plan, credits, and pricing options
 */
const PlanBillingPage = () => {
  const { colors } = useTheme();
  
  // Mock data for current plan
  const [currentPlan] = useState({
    name: 'Pro Plan',
    status: 'Active',
    nextBilling: 'December 15, 2024',
    price: '$29/month'
  });

  // Mock data for credits
  const [creditsData] = useState({
    used: 750,
    total: 1000,
    resetDate: 'December 1, 2024'
  });

  // Mock data for pricing plans
  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$9',
      period: 'month',
      description: 'Perfect for individuals getting started',
      credits: 500,
      features: [
        'Basic content creation',
        '500 monthly credits',
        'Standard templates',
        'Email support'
      ],
      popular: false,
      current: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$29',
      period: 'month',
      description: 'Ideal for professionals and small teams',
      credits: 1000,
      features: [
        'Advanced content creation',
        '1,000 monthly credits',
        'Premium templates',
        'Priority support',
        'Analytics dashboard'
      ],
      popular: true,
      current: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$99',
      period: 'month',
      description: 'For large teams and organizations',
      credits: 5000,
      features: [
        'Unlimited content creation',
        '5,000 monthly credits',
        'Custom templates',
        '24/7 priority support',
        'Advanced analytics',
        'Team management',
        'API access'
      ],
      popular: false,
      current: false
    }
  ];

  // Main container styles
  const containerStyles = {
    paddingTop: spacing.spacing[80],
    paddingBottom: spacing.spacing[160],
    paddingLeft: spacing.spacing[32],
    paddingRight: spacing.spacing[32],
    width: '840px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[32],
  };

  // Page title style
  const pageTitleStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size['4xl'],
    fontWeight: typography.desktop.weight.semibold,
    lineHeight: typography.desktop.lineHeight.leading7,
    color: colors.text.default,
    marginBottom: spacing.spacing[24],
  };

  // Row styles for two-column layout
  const rowStyles = {
    display: 'flex',
    gap: spacing.spacing[24],
    alignItems: 'stretch',
  };

  // Pricing cards row with smaller gap
  const pricingRowStyles = {
    display: 'flex',
    gap: spacing.spacing[16],
    alignItems: 'stretch',
  };

  // Current Plan Card Component
  const CurrentPlanCard = () => (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[20],
        padding: spacing.spacing[24],
        borderRadius: cornerRadius.borderRadius.xl,
        backgroundColor: colors.bg.card.default,
        border: `1px solid ${colors.border.default}`,
        boxShadow: getShadow('regular.card', colors, { withBorder: true }),
      }}
    >
      {/* Card Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ ...textStyles.xl.semibold, color: colors.text.default, margin: 0 }}>
            Current Plan
          </h2>
          <p style={{ ...textStyles.sm.normal, color: colors.text.subtle, margin: `${spacing.spacing[4]} 0 0 0` }}>
            Manage your subscription and billing
          </p>
        </div>
        <Badge
          variant="default"
          size="sm"
          color="green"
          label={currentPlan.status}
        />
      </div>

      {/* Plan Details */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[16],
          padding: spacing.spacing[20],
          borderRadius: cornerRadius.borderRadius.lg,
          backgroundColor: colors.bg.subtle,
          border: `1px solid ${colors.border.default}`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ ...textStyles.lg.semibold, color: colors.text.default, margin: 0 }}>
              {currentPlan.name}
            </h3>
            <p style={{ ...textStyles.sm.normal, color: colors.text.subtle, margin: `${spacing.spacing[4]} 0 0 0` }}>
              Next billing: {currentPlan.nextBilling}
            </p>
          </div>
          <div style={{ ...textStyles.xl.bold, color: colors.text.default }}>
            {currentPlan.price}
          </div>
        </div>

        <Button
          label="Manage Subscription"
          style="secondary"
          size="md"
          leadIcon={<Settings size={16} />}
          onClick={() => console.log('Manage subscription clicked')}
        />
      </div>
    </div>
  );

  // Credits Card Component
  const CreditsCard = () => {
    const creditsUsedPercentage = (creditsData.used / creditsData.total) * 100;
    const remainingCredits = creditsData.total - creditsData.used;

    return (
      <div
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[20],
          padding: spacing.spacing[24],
          borderRadius: cornerRadius.borderRadius.xl,
          backgroundColor: colors.bg.card.default,
          border: `1px solid ${colors.border.default}`,
          boxShadow: getShadow('regular.card', colors, { withBorder: true }),
        }}
      >
        {/* Card Header */}
        <div>
          <h2 style={{ ...textStyles.xl.semibold, color: colors.text.default, margin: 0 }}>
            Monthly Credits
          </h2>
          <p style={{ ...textStyles.sm.normal, color: colors.text.subtle, margin: `${spacing.spacing[4]} 0 0 0` }}>
            Track your usage and remaining credits
          </p>
        </div>

        {/* Credits Usage */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.spacing[16],
            padding: spacing.spacing[20],
            borderRadius: cornerRadius.borderRadius.lg,
            backgroundColor: colors.bg.subtle,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          {/* Credits Numbers */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ ...textStyles['2xl'].bold, color: colors.text.default }}>
                {remainingCredits.toLocaleString()}
              </div>
              <div style={{ ...textStyles.sm.normal, color: colors.text.subtle }}>
                credits remaining
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ ...textStyles.md.medium, color: colors.text.subtle }}>
                {creditsData.used.toLocaleString()} / {creditsData.total.toLocaleString()}
              </div>
              <div style={{ ...textStyles.xs.normal, color: colors.text.subtle }}>
                used this month
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: colors.bg.input.default,
                borderRadius: cornerRadius.borderRadius.full,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${creditsUsedPercentage}%`,
                  height: '100%',
                  backgroundColor: creditsUsedPercentage > 80 ? colors.bg.state.destructive : colors.bg.state.primary,
                  transition: 'width 0.3s ease-in-out',
                }}
              />
            </div>
            <div style={{ ...textStyles.xs.normal, color: colors.text.subtle }}>
              Resets on {creditsData.resetDate}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Pricing Plan Card Component
  const PricingPlanCard = ({ plan }) => (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[20],
        padding: spacing.spacing[24],
        borderRadius: cornerRadius.borderRadius.xl,
        backgroundColor: plan.popular ? colors.bg.card.default : colors.bg.card.subtle,
        border: plan.popular 
          ? `2px solid ${colors.border.highlight}` 
          : `1px solid ${colors.border.default}`,
        boxShadow: plan.popular 
          ? getShadow('regular.modalMd', colors, { withBorder: true })
          : getShadow('regular.card', colors, { withBorder: true }),
        position: 'relative',
      }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Badge
            variant="default"
            size="sm"
            color="green"
            label="Most Popular"
          />
        </div>
      )}

      {/* Plan Header */}
      <div>
        <h3 style={{ ...textStyles.lg.semibold, color: colors.text.default, margin: 0 }}>
          {plan.name}
          {plan.current && (
            <Badge
              variant="default"
              size="sm"
              color="green"
              label="Current"
              style={{ marginLeft: spacing.spacing[8] }}
            />
          )}
        </h3>
        <p style={{ ...textStyles.sm.normal, color: colors.text.subtle, margin: `${spacing.spacing[4]} 0 0 0` }}>
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: spacing.spacing[4] }}>
        <span style={{ ...textStyles['3xl'].bold, color: colors.text.default }}>
          {plan.price}
        </span>
        <span style={{ ...textStyles.md.normal, color: colors.text.subtle }}>
          /{plan.period}
        </span>
      </div>

      {/* Credits */}
      <div
        style={{
          padding: spacing.spacing[12],
          borderRadius: cornerRadius.borderRadius.md,
          backgroundColor: colors.bg.subtle,
          border: `1px solid ${colors.border.default}`,
        }}
      >
        <div style={{ ...textStyles.sm.medium, color: colors.text.default }}>
          {plan.credits.toLocaleString()} monthly credits
        </div>
      </div>

      {/* Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
        {plan.features.map((feature, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[8] }}>
            <Check size={16} color={colors.icon.success} />
            <span style={{ ...textStyles.sm.normal, color: colors.text.default }}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div style={{ marginTop: 'auto' }}>
        {plan.current ? (
          <Button
            label="Current Plan"
            style="secondary"
            size="md"
            disabled={true}
          />
        ) : (
          <Button
            label={plan.id === 'enterprise' ? 'Upgrade to Enterprise' : 
                   plan.id === 'starter' ? 'Downgrade to Starter' : 'Select Plan'}
            style={plan.popular ? 'primary' : 'secondary'}
            size="md"
            leadIcon={<CreditCard size={16} />}
            onClick={() => console.log(`Selected ${plan.name} plan`)}
          />
        )}
      </div>
    </div>
  );

  return (
    <div style={containerStyles}>
      {/* Page Title */}
      <h1 style={pageTitleStyle}>Plan & Billing</h1>

      {/* First Row: Current Plan + Credits */}
      <div style={rowStyles}>
        <CurrentPlanCard />
        <CreditsCard />
      </div>

      {/* Second Row: Pricing Plans */}
      <div>
        <h2 style={{ ...textStyles['2xl'].semibold, color: colors.text.default, marginBottom: spacing.spacing[24] }}>
          Choose Your Plan
        </h2>
        <div style={pricingRowStyles}>
          {pricingPlans.map((plan) => (
            <PricingPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanBillingPage;