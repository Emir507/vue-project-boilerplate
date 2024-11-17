import { GlobalThemeOverrides } from "naive-ui"

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#7000ff",
    primaryColorHover: "var(--brand-primary-500)",
    primaryColorPressed: "var(--brand-primary-500)",
    primaryColorSuppl: "var(--brand-primary-500)",
    borderRadius: "8px",
    fontSizeMedium: "1.2rem"
  },

  Space: {
    gapSmall: "8px",
    gapMedium: "12px",
    gapLarge: "16px"
  },

  Spin: {
    sizeMedium: "18px"
  },

  Layout: {
    textColor: "var(--text-primary)"
  },

  Select: {
    menuBoxShadow: "0 4px 14px 0 var(--grey-150)",
    peers: {
      InternalSelection: {
        color: "var(--grey-50)",
        colorActive: "var(--bg-card-elevated)",
        borderActive: "var(--bg-card-elevated)",
        borderFocus: "var(--bg-card-elevated)",
        textColor: "var(--text-primary)",
        arrowColor: "var(--brand-primary-500)",
        arrowSize: "2.4rem",
        border: "none",
        borderHover: "var(--brand-primary-500)",
        boxShadowFocus: "none",
        boxShadowActive: "none",
        placeholderColor: "var(--grey-500)",
        heightLarge: "4.5rem",
        fontSizeLarge: "1.4rem"
      }
    }
  },

  Button: {
    waveOpacity: 0.8,
    opacityDisabled: 0.8,
    color: "var(--bg-primary)",
    textColorHover: "var(--text-secondary)",
    border: "1px solid var(--text-secondary)",
    colorHover: "var(--bg-primary)",
    textColorFocus: "var(--text-secondary)",
    textColorPressed: "var(--text-secondary)",
    colorFocus: "var(--bg-primary)",
    colorPressed: "var(--bg-primary)",
    textColor: "var(--text-secondary)",
    heightMedium: "3.6rem",
    heightLarge: "4.5rem",
    borderRadiusLarge: "12px",
    paddingMedium: "0.8rem 1.2rem",
    textColorTextError: "var(--text-white)",
    colorError: "var(--danger-500)",
    colorHoverError: "var(--danger-500)",
    borderError: "var(--danger-500)",
    colorPressedError: "var(--danger-500)",
    borderFocusError: "var(--danger-500)",
    borderPressedError: "var(--danger-500)",
    textColorFocusError: "var(--text-white)",
    colorFocusError: "var(--danger-500)",
    fontSizeLarge: "1.6rem",
    fontWeightStrong: "600",
    colorInfo: "var(--brand-primary-200)",
    textColorTextHoverInfo: "var(--brand-primary-500)",
    textColorGhostHoverInfo: "var(--brand-primary-500)",
    textColorInfo: "var(--brand-primary-500)",
    borderInfo: "var(--brand-primary-200)",
    borderPressedInfo: "var(--brand-primary-200)",
    colorFocusInfo: "var(--brand-primary-200)",
    colorHoverInfo: "var(--brand-primary-200)",
    textColorHoverInfo: "var(--text-primary)",
    textColorFocusInfo: "var(--text-primary)",
    borderHoverInfo: "var(--brand-primary-200)",
    colorPressedInfo: "var(--brand-primary-200)",
    textColorPressedInfo: "var(--text-primary)",
    borderFocusInfo: "var(--brand-primary-200)",
    rippleColorInfo: "var(--brand-primary-200)",
    iconMarginSmall: "1.6rem",
    iconSizeMedium: "2rem",
    iconSizeLarge: "2.4rem",
    borderDisabledInfo: "1px solid var(--bg-card-elevated)",
    colorDisabledInfo: "var(--bg-card-elevated)",
    textColorDisabledInfo: "var(--grey-400)"
  },

  Tag: {
    border: false,
    borderRadius: "40px",
    padding: "0.2rem 1.6rem",
    fontSizeMedium: "1.2rem",
    fontSizeSmall: "1rem",
    borderSuccess: false,
    borderError: false,
    borderWarning: false,
    textColor: "var(--text-primary)",
    textColorSuccess: "var(--success-500)",
    textColorWarning: "var(--warning-500)",
    textColorError: "var(--danger-500)",
    closeIconColor: "var(--grey-400)"
  },

  Input: {
    border: false,
    borderFocus: "1px solid var(--brand-primary-500)",
    fontSizeMedium: "1.2rem",
    fontSizeLarge: "1.4rem",
    heightMedium: "3.6rem",
    heightLarge: "4.5rem",
    placeholderColor: "var(--grey-500)",
    textColor: "var(--text-primary)",
    color: "var(--bg-card-elevated)",
    colorFocus: "var(--bg-card-elevated)",
    colorFocusError: "var(--bg-card-elevated)",
    borderError: "1px solid var(--danger-500)",
    borderFocusError: "1px solid var(--danger-500)",
    borderDisabled: false
  },

  DatePicker: {
    calendarDaysFontSize: "1.4rem",
    calendarTitleFontSize: "1.4rem",
    itemFontSize: "1.2rem",
    panelBoxShadow: "0 4px 14px 0 var(--grey-150)"
  },

  Pagination: {
    itemBorderActive: false,
    itemTextColorActive: "var(--brand-primary-500)",
    buttonBorder: false,
    buttonBorderHover: false,
    buttonBorderPressed: false
  },

  Table: {
    thTextColor: "var(--text-secondary)",
    thColor: "var(--text-white)",
    thPaddingMedium: "1.2rem 2rem",
    tdTextColor: "var(--text-primary)",
    tdPaddingMedium: "1.2rem 2rem",
    borderRadius: false
  },

  DataTable: {
    thTextColor: "var(--text-secondary)",
    thColor: "var(--text-white)",
    thPaddingMedium: "1.2rem 2rem",
    tdTextColor: "var(--text-primary)",
    tdPaddingMedium: "1.2rem 2rem",
    borderRadius: false,
    thIconColor: "var(--text-secondary)"
  },

  Radio: {
    buttonBorderColor: false,
    buttonBorderColorActive: false,
    buttonColorActive: "var(--brand-primary-500)",
    buttonTextColorActive: "var(--text-white)",
    buttonBoxShadowFocus: false,
    buttonBorderRadius: false,
    buttonTextColor: "var(--grey-300)",
    buttonTextColorHover: "var(--brand-primary-500)",
    buttonHeightMedium: "3rem",
    fontSizeMedium: "1.4rem"
  },

  Checkbox: {
    sizeLarge: "2.5rem",
    borderRadius: "0.8rem"
  },

  Descriptions: {
    fontSizeMedium: "1.4rem",
    fontSizeSmall: "1.2rem",
    titleTextColor: "var(--text-primary)",
    thFontWeight: "700",
    tdTextColor: "var(--text-primary)"
  },

  Card: {
    borderColor: false,
    borderRadius: "12px",
    color: "var(--grey-50)",
    titleFontWeight: 600,
    titleFontSizeMedium: "1.6rem",
    paddingMedium: "2.4rem 2.4rem"
  },

  Collapse: {
    titleFontSize: "2rem",
    titleFontWeight: 700
  },

  Form: {
    labelHeightMedium: 0,
    feedbackTextColorError: "var(--danger-500)",
    feedbackHeightMedium: "2.8rem",
    feedbackFontSizeMedium: "1.2rem",
    labelFontSizeTopMedium: "1.3rem",
    labelTextColor: "var(--text-primary)",
    asteriskColor: "var(--danger-500)"
  },

  Menu: {
    itemHeight: "3.6rem",
    itemColorActive: "var(--bg-card-elevated)",
    itemColorHover: "var(--bg-card-elevated)",
    itemColorActiveHover: "var(--bg-card-elevated)",
    itemTextColor: "var(--text-primary)",
    itemTextColorHover: "var(--text-primary)",
    itemTextColorActive: "var(--text-primary)",
    itemTextColorChildActive: "var(--text-primary)",
    itemTextColorActiveHover: "var(--text-primary)",
    arrowColorActive: "var(--text-primary)",
    arrowColorChildActive: "var(--text-primary)",
    arrowColorChildActiveHover: "var(--text-primary)",
    borderRadius: "10px"
  },

  Alert: {
    titleTextColorError: "var(--text-white)",
    contentTextColorError: "var(--text-white)",
    colorError: "var(--danger-500)",
    closeIconColorError: "var(--text-white)",
    closeIconColorHoverError: "var(--text-white)",
    closeColorHoverError: false,
    titleTextColorSuccess: "var(--text-white)",
    contentTextColorSuccess: "var(--text-white)",
    colorSuccess: "var(--success-500)",
    closeIconColorSuccess: "var(--text-white)",
    closeIconColorHoverSuccess: "var(--text-white)",
    closeColorHoverSuccess: false
  },

  Drawer: {
    textColor: "var(--text-primary)",
    bodyPadding: "2.4rem 1.8rem"
  }
}
