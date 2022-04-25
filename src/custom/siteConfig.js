import { EnvironmentOutlined, LinkOutlined } from "@ant-design/icons";

const siteConfig = {
  demoMode: true,
  auth: {
    thirdParties: {
      googleEnabled: false,
      facebookEnabled: false,
      twitterEnabled: false,
      githubEnabled: false,
    },
    registrationEnabled: true,
  },
  sidebar: {
    groups: [
      {
        path: "/sample-group/",
        key: "sample-group",
        title: "Sample group",
        icon: <LinkOutlined />,
      },
    ],
    single: [
      {
        path: "/sample/",
        key: "sample",
        code: "sidebar.sample",
        title: "Sample",
        icon: <EnvironmentOutlined />,
      },
      {
        path: "/sample-group/first-elem",
        key: "sample-group-elem-1",
        code: "sidebar.sample.1",
        title: "Sample 1",
        icon: <EnvironmentOutlined />,
      },
      {
        path: "/sample-group/second-elem",
        key: "sample-group-elem-2",
        code: "sidebar.sample.2",
        title: "Sample 2",
        icon: <EnvironmentOutlined />,
      },
    ],
  },
};

export default siteConfig;
