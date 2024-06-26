import path from "path";
import type { PresetProperty } from "@storybook/types";
import type { StorybookConfig } from "./types";

export const addons: PresetProperty<"addons", StorybookConfig> = [
  path.dirname(
    require.resolve(path.join("@pixi/storybook-preset-vite", "package.json"))
  ),
  path.dirname(
    require.resolve(path.join("@pixi/storybook-renderer", "package.json"))
  ),
];

export const core: PresetProperty<"core", StorybookConfig> = async (
  config,
  options
) => {
  const framework = await options.presets.apply<StorybookConfig["framework"]>(
    "framework"
  );

  return {
    ...config,
    builder: {
      name: path.dirname(
        require.resolve(path.join("@storybook/builder-vite", "package.json"))
      ) as "@storybook/builder-vite",
      options:
        typeof framework === "string" ? {} : framework.options.builder || {},
    },
  };
};
