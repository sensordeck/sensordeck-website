import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import CTODemoClient from "@/app/[lang]/demo/cto/CTODemoClient";
import InvestigationDemoClient from "@/app/[lang]/demo/investigation/InvestigationDemoClient";
import SensorFaeDemoClient from "@/app/[lang]/demo/sensor-fae/SensorFaeDemoClient";
import Tier1DemoClient from "@/app/[lang]/demo/tier1/Tier1DemoClient";
import { demoContent } from "@/content/zh/demo";
import { atlasLifecycle, demoScenario } from "@/data/demo/scenario";

afterEach(() => cleanup());

describe("Atlas V3 demo", () => {
 it("uses the official complete lifecycle and shared identifiers",()=>{expect(atlasLifecycle).toEqual(["Runtime Dataset","Evidence Pack (EP)","REF","Historical RGA","Investigation Context","Investigation Tier Candidate","Sensor Engagement Pack (EGP)","Investigation Result (IR) / Lessons Learned (LL)","OEM Closure","Assist Candidate / Assist Vault"]); expect(demoScenario).toMatchObject({ref:"REF-DEMO-2030-0001",evidencePack:"EP-C03",engagementPack:"EGP-DEMO-SENSOR-2030-0001"});});
 it("navigates Tier 1 evidence and review steps",()=>{render(<Tier1DemoClient content={demoContent}/>);fireEvent.click(screen.getByRole("button",{name:/Runtime Dataset/}));expect(screen.getByText("RDS-DEMO-2030-0001")).toBeInTheDocument();fireEvent.click(screen.getByRole("button",{name:/审核、优先级/}));expect(screen.getByText("P2 · Human review")).toBeInTheDocument();});
 it("switches investigation stages",()=>{render(<InvestigationDemoClient content={demoContent}/>);fireEvent.click(screen.getByRole("button",{name:"Historical RGA"}));expect(screen.getByText("Strong Candidate · 87%")).toBeInTheDocument();fireEvent.click(screen.getByRole("button",{name:"EGP Preview"}));expect(screen.getAllByText(/EGP-DEMO-SENSOR-2030-0001/).length).toBeGreaterThan(0);});
 it("updates FAE authorization state",()=>{render(<SensorFaeDemoClient content={demoContent}/>);fireEvent.change(screen.getByRole("combobox",{name:"STATUS"}),{target:{value:"Authorized"}});expect(screen.getAllByText("Authorized").length).toBeGreaterThan(0);});
 it("filters the CTO estimate window",()=>{render(<CTODemoClient content={demoContent}/>);fireEvent.click(screen.getByRole("button",{name:"30 days"}));expect(screen.getByText(/30 days · 非客户实际结果/)).toBeInTheDocument();});
});
