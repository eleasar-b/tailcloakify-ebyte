import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";
import useProviderLogos from "../useProviderLogos";

const { KcPageStory } = createKcPageStory({ pageId: "login.ftl" });

const meta = {
    title: "login/login.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithInvalidCredential: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                login: {
                    username: "johndoe"
                },
                messagesPerField: {
                    // NOTE: The other functions of messagesPerField are derived from get() and
                    // existsError() so they are the only ones that need to mock.
                    existsError: (fieldName: string, ...otherFieldNames: string[]) => {
                        const fieldNames = [fieldName, ...otherFieldNames];
                        return fieldNames.includes("username") || fieldNames.includes("password");
                    },
                    get: (fieldName: string) => {
                        if (fieldName === "username" || fieldName === "password") {
                            return "Invalid username or password.";
                        }
                        return "";
                    }
                }
            }}
        />
    )
};

export const WithHeaderLogo: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                properties: {
                    TAILCLOAKIFY_HEADER_LOGO_URL: "https://www.almig.de/typo3conf/ext/almig_package/Resources/Public/Images/almig-logo.png"
                }
            }}
        />
    )
};

export const WithoutRegistration: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { registrationAllowed: false }
            }}
        />
    )
};

export const WithoutRememberMe: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { rememberMe: false }
            }}
        />
    )
};

export const WithoutPasswordReset: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { resetPasswordAllowed: false }
            }}
        />
    )
};

export const WithEmailAsUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { loginWithEmailAllowed: false }
            }}
        />
    )
};

export const WithPresetUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                login: { username: "max.mustermann@mail.com" }
            }}
        />
    )
};

export const WithImmutablePresetUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                auth: {
                    attemptedUsername: "max.mustermann@mail.com",
                    showUsername: true
                },
                usernameHidden: true,
                message: {
                    type: "info",
                    summary: "Please re-authenticate to continue"
                }
            }}
        />
    )
};

export const WithSocialProviders: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        {
                            loginUrl: "google",
                            alias: "google",
                            providerId: "google",
                            displayName: "Google",
                            iconClasses: "fa fa-google"
                        },
                        {
                            loginUrl: "microsoft",
                            alias: "microsoft",
                            providerId: "microsoft",
                            displayName: "Microsoft",
                            iconClasses: "fa fa-windows"
                        },
                        {
                            loginUrl: "facebook",
                            alias: "facebook",
                            providerId: "facebook",
                            displayName: "Facebook",
                            iconClasses: "fa fa-facebook"
                        },
                        {
                            loginUrl: "instagram",
                            alias: "instagram",
                            providerId: "instagram",
                            displayName: "Instagram",
                            iconClasses: "fa fa-instagram"
                        },
                        {
                            loginUrl: "twitter",
                            alias: "twitter",
                            providerId: "twitter",
                            displayName: "Twitter",
                            iconClasses: "fa fa-twitter"
                        },
                        {
                            loginUrl: "linkedin",
                            alias: "linkedin",
                            providerId: "linkedin",
                            displayName: "LinkedIn",
                            iconClasses: "fa fa-linkedin"
                        },
                        {
                            loginUrl: "stackoverflow",
                            alias: "stackoverflow",
                            providerId: "stackoverflow",
                            displayName: "Stackoverflow",
                            iconClasses: "fa fa-stack-overflow"
                        },
                        {
                            loginUrl: "github",
                            alias: "github",
                            providerId: "github",
                            displayName: "Github",
                            iconClasses: "fa fa-github"
                        },
                        {
                            loginUrl: "gitlab",
                            alias: "gitlab",
                            providerId: "gitlab",
                            displayName: "Gitlab",
                            iconClasses: "fa fa-gitlab"
                        },
                        {
                            loginUrl: "bitbucket",
                            alias: "bitbucket",
                            providerId: "bitbucket",
                            displayName: "Bitbucket",
                            iconClasses: "fa fa-bitbucket"
                        },
                        {
                            loginUrl: "paypal",
                            alias: "paypal",
                            providerId: "paypal",
                            displayName: "PayPal",
                            iconClasses: "fa fa-paypal"
                        },
                        {
                            loginUrl: "openshift",
                            alias: "openshift",
                            providerId: "openshift",
                            displayName: "OpenShift",
                            iconClasses: "fa fa-cloud"
                        }
                    ]
                }
            }}
        />
    )
};

export const WithoutPasswordField: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { password: false }
            }}
        />
    )
};

export const WithErrorMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "The time allotted for the connection has elapsed.<br/>The login process will restart from the beginning.",
                    type: "error"
                }
            }}
        />
    )
};

export const WithOneSocialProvider: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        {
                            loginUrl: "google",
                            alias: "google",
                            providerId: "google",
                            displayName: "Google",
                            iconClasses: "fa fa-google"
                        }
                    ]
                }
            }}
        />
    )
};

export const WithTwoSocialProviders: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        {
                            loginUrl: "google",
                            alias: "google",
                            providerId: "google",
                            displayName: "Google",
                            iconClasses: "fa fa-google"
                        },
                        {
                            loginUrl: "microsoft",
                            alias: "microsoft",
                            providerId: "microsoft",
                            displayName: "Microsoft",
                            iconClasses: "fa fa-windows"
                        }
                    ]
                }
            }}
        />
    )
};
export const WithNoSocialProviders: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: []
                }
            }}
        />
    )
};
export const WithMoreThanTwoSocialProviders: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        {
                            loginUrl: "google",
                            alias: "google",
                            providerId: "google",
                            displayName: "Google",
                            iconClasses: "fa fa-google"
                        },
                        {
                            loginUrl: "microsoft",
                            alias: "microsoft",
                            providerId: "microsoft",
                            displayName: "Microsoft",
                            iconClasses: "fa fa-windows"
                        },
                        {
                            loginUrl: "facebook",
                            alias: "facebook",
                            providerId: "facebook",
                            displayName: "Facebook",
                            iconClasses: "fa fa-facebook"
                        },
                        {
                            loginUrl: "twitter",
                            alias: "twitter",
                            providerId: "twitter",
                            displayName: "Twitter",
                            iconClasses: "fa fa-twitter"
                        }
                    ]
                }
            }}
        />
    )
};
export const WithUnknownSocialProvidersAndWithoutRememberMe: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        {
                            loginUrl: "google",
                            alias: "google",
                            providerId: "google",
                            displayName: "Google",
                            iconClasses: "fa fa-google"
                        },
                        {
                            loginUrl: "unknown",
                            alias: "unknown",
                            providerId: "unknown",
                            displayName: "Unknown",
                            iconClasses: ""
                        }
                    ]
                },
                realm: { rememberMe: false }
            }}
        />
    )
};
export const WithImprintAndDataprotection: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                properties: {
                    TAILCLOAKIFY_FOOTER_IMPRINT_URL: "https://google.com",
                    TAILCLOAKIFY_FOOTER_DATAPROTECTION_URL: "https://google.com"
                }
            }}
        />
    )
};
export const WithCookieConsent: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                properties: {
                    TAILCLOAKIFY_FOOTER_ORESTBIDACOOKIECONSENT: "true"
                }
            }}
        />
    )
};
export const WithAllSocialProvidersFooterAndCookie_ForSplashScreen: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                realm: {
                    name: "Tailcloakify",
                    displayName: "Tailcloakify",
                    displayNameHtml: "Tailcloakify",
                    rememberMe: true
                },
                social: {
                    displayInfo: true,
                    providers: Object.keys(useProviderLogos())
                        .filter(providerId => providerId !== "twitter")
                        .map(providerId => ({
                            loginUrl: providerId,
                            alias: providerId,
                            providerId: providerId,
                            displayName: providerId.charAt(0).toUpperCase() + providerId.slice(1),
                            iconClasses: `fa fa-${providerId}`
                        }))
                },
                properties: {
                    TAILCLOAKIFY_FOOTER_IMPRINT_URL: "https://google.com",
                    TAILCLOAKIFY_FOOTER_DATAPROTECTION_URL: "https://google.com",
                    TAILCLOAKIFY_FOOTER_ORESTBIDACOOKIECONSENT: "true"
                }
            }}
        />
    )
};
export const WithCookieConsentAndExternalScript: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                properties: {
                    TAILCLOAKIFY_FOOTER_ORESTBIDACOOKIECONSENT: "true",
                    TAILCLOAKIFY_ADDITIONAL_SCRIPTS: "https://static.dev.almig.de/cookie-consent/cookie-consent-loader.js"
                }
            }}
        />
    )
};
export const WithBackgroundLogoAndBackgroundVideoAndFavicon: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                properties: {
                    TAILCLOAKIFY_BACKGROUND_LOGO_URL:
                        "https://www.almig.de/typo3conf/ext/almig_package/Resources/Public/Images/almig-logo-inverted.png",
                    TAILCLOAKIFY_BACKGROUND_VIDEO_URL: "https://www.almig.de/fileadmin/user_upload/Video/Almig_Intro.mp4",
                    TAILCLOAKIFY_FAVICON_URL: "https://almig.de/typo3conf/ext/almig_package/Resources/Public/Icons/favicon.ico"
                }
            }}
        />
    )
};
export const WithScriptsStylesAndMeta: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                properties: {
                    scripts: "/invalid-script.js /another-invalid-script.js",
                    styles: "/invalid-styles.css /another-invalid-styles.css",
                    meta: "test==content test2==content2",
                }
            }}
        />
    )
};

/**
 * WithDoTryAnotherWayOption:
 * - Purpose: Test usage of doTryAnotherWay integration
 * - Scenario: Simulates a scenario where the `showTryAnotherWayLink` is set to `true`, and the "Try Another Way" link is not rendered.
 * - Key Aspect: Ensure that it is displayed correctly.
 */
export const WithDoTryAnotherWayOption: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                auth: {
                    showTryAnotherWayLink: true,
                },
            }}
        />
    )
};

/**
 * realm: { registrationAllowed: false }:
 * - Purpose: Hide Login Form & Allow only to sign-in with social idp
 * - Scenario: Simulates a scenario where the `TAILCLOAKIFY_HIDE_LOGIN_FORM` is set to `true`, and the social providers are rendered.
 * - Key Aspect: Ensure that it is displayed correctly.
 */
export const OnlySocialIdps: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                realm: { registrationAllowed: false },
                properties: {
                    TAILCLOAKIFY_HIDE_LOGIN_FORM: 'TRUE'
                },
                social: {
                    displayInfo: true,
                    providers: Object.keys(useProviderLogos())
                        .filter(providerId => providerId !== "twitter")
                        .map(providerId => ({
                            loginUrl: providerId,
                            alias: providerId,
                            providerId: providerId,
                            displayName: providerId.charAt(0).toUpperCase() + providerId.slice(1),
                            iconClasses: `fa fa-${providerId}`
                        }))
                },
            }}
        />
    )
};

