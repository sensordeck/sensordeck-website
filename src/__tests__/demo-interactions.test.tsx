import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CTODemoClient from "@/app/[lang]/demo/cto/CTODemoClient";
import InvestigationDemoClient from "@/app/[lang]/demo/investigation/InvestigationDemoClient";
import SensorFaeDemoClient from "@/app/[lang]/demo/sensor-fae/SensorFaeDemoClient";
import Tier1DemoClient from "@/app/[lang]/demo/tier1/Tier1DemoClient";
import { demoContent as enDemoContent } from "@/content/en/demo";
import { demoContent as zhDemoContent } from "@/content/zh/demo";

describe("demo interactions", () => {
  it("updates the CTO time range and ROI model", () => {
    render(<CTODemoClient content={enDemoContent} />);

    fireEvent.click(screen.getByRole("button", { name: "30 days" }));
    fireEvent.click(screen.getByRole("button", { name: "Actual" }));

    expect(screen.getByRole("button", { name: "30 days" })).toHaveClass(
      "bg-atlas-blue",
    );
    expect(screen.getByRole("button", { name: "Actual" })).toHaveClass(
      "bg-atlas-blue",
    );
    expect(screen.getAllByText("1580h")).toHaveLength(2);
    expect(screen.getAllByText("¥316K")).toHaveLength(2);
  });

  it("switches investigation candidates and evidence windows", () => {
    render(<InvestigationDemoClient content={enDemoContent} />);

    const candidateButton = screen.getByRole("button", { name: /C01/ });
    fireEvent.click(candidateButton);
    fireEvent.click(screen.getByRole("button", { name: /Pre-Guard/ }));

    expect(candidateButton).toHaveClass("border-atlas-blue");
    expect(
      screen.getByText(
        "USB bus operating normally with 1.2 ms average latency.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Pre-Guard/ }),
    ).toHaveClass("border-atlas-blue");
  });

  it("updates the Sensor FAE result status and lesson learned draft", () => {
    render(<SensorFaeDemoClient content={zhDemoContent} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "candidate_field_test" },
    });
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "现场复测后补充屏蔽线缆结果。" },
    });

    const statusRow = screen.getByText("IR 状态").parentElement;
    expect(statusRow).not.toBeNull();
    expect(within(statusRow!).getByText("需要候选现场测试")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue(
      "现场复测后补充屏蔽线缆结果。",
    );
  });

  it("navigates the complete Tier 1 workflow", () => {
    render(<Tier1DemoClient content={zhDemoContent} />);

    fireEvent.click(
      screen.getByRole("button", { name: "下一步：机器人信息 →" }),
    );
    expect(
      screen.getByRole("heading", { name: "机器人与环境" }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: "下一步：运行时证据 →" }),
    );
    expect(
      screen.getByRole("heading", { name: "运行时证据" }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: "下一步：审核路由 →" }),
    );
    expect(
      screen.getByRole("heading", { name: "审核并路由到 Tier 2" }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "← 上一步" }));
    expect(
      screen.getByRole("heading", { name: "运行时证据" }),
    ).toBeInTheDocument();
  });
});
