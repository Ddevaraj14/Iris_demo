import svgPaths from "./svg-gqiitvxgli";
import imgGeminiGeneratedImage2J17Tp2J17Tp2J171 from "figma:asset/c6bff74e35914521a76bd90af88f6ad2d3f98fc4.png";

function Background() {
  return <div className="absolute contents left-0 top-0" data-name="Background" />;
}

function AppLogoName() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="App Logo & Name">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[64px] text-center text-white">Full Addressability</p>
    </div>
  );
}

function Metadata() {
  return (
    <div className="h-[159px] relative shrink-0 w-full" data-name="Metadata">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[32px] left-0 not-italic text-[#efefef] text-[24px] top-0 w-[949px] whitespace-pre-wrap">Iris bridges linear and digital environments, unifying your ad experience while maintaining the ability to deliver at scale.</p>
    </div>
  );
}

function InformationContainer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%-420px)] top-[64px] w-[840px]" data-name="Information container">
      <AppLogoName />
      <Metadata />
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_281)" id="Left Icon">
          <path d={svgPaths.p2ff70f00} fill="var(--fill-0, #E2E2E2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_281">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[rgba(94,94,94,0)] content-stretch flex gap-[8px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 size-[32px]" data-name="_Button base">
      <div aria-hidden="true" className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <LeftIcon />
    </div>
  );
}

function TeritaryButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[32px]" data-name="Teritary Button">
      <ButtonBase />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <TeritaryButton />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pl-[2px] pr-[6px] relative shrink-0" data-name="Label container">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-right tracking-[0.16px]">Intro</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[83px]">
      <LabelContainer />
    </div>
  );
}

function Circle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_278)" id="Circle">
          <path d={svgPaths.p25b18600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_278">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RightContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center pt-[4px] relative shrink-0" data-name="Right container">
      <Circle />
      <div className="bg-[#5e5e5e] h-[80px] rounded-[2px] shrink-0 w-[2px]" data-name="Right Connector" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[89px]">
      <Frame />
      <RightContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Frame1 />
    </div>
  );
}

function StepsInlineLabelBase() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pr-[6px] relative shrink-0" data-name="_Steps inline label base">
      <Container />
    </div>
  );
}

function StepsInline() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Steps inline">
      <StepsInlineLabelBase />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pl-[2px] pr-[6px] relative shrink-0" data-name="Label container">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#f8f8f8] text-[14px] text-right tracking-[0.16px]">Full Addressability</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[83px]">
      <LabelContainer1 />
    </div>
  );
}

function CircleDot() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Circle Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_272)" id="Circle Dot">
          <path d={svgPaths.p1653f800} fill="var(--fill-0, #E2E8F2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_272">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RightContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Right container">
      <CircleDot />
      <div className="bg-[#e2e8f2] h-[80px] rounded-[2px] shrink-0 w-[2px]" data-name="Right Connector" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[89px]">
      <Frame6 />
      <RightContainer1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Frame5 />
    </div>
  );
}

function StepsInlineLabelBase1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pr-[6px] relative shrink-0" data-name="_Steps inline label base">
      <Container1 />
    </div>
  );
}

function StepsInline1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Steps inline">
      <StepsInlineLabelBase1 />
    </div>
  );
}

function LabelContainer2() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pl-[2px] pr-[6px] relative shrink-0" data-name="Label container">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-right tracking-[0.16px]">Agnostic platform</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[83px]">
      <LabelContainer2 />
    </div>
  );
}

function Circle1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_278)" id="Circle">
          <path d={svgPaths.p25b18600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_278">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RightContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center pt-[4px] relative shrink-0" data-name="Right container">
      <Circle1 />
      <div className="bg-[#5e5e5e] h-[80px] rounded-[2px] shrink-0 w-[2px]" data-name="Right Connector" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[89px]">
      <Frame8 />
      <RightContainer2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Frame7 />
    </div>
  );
}

function StepsInlineLabelBase2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pr-[6px] relative shrink-0" data-name="_Steps inline label base">
      <Container2 />
    </div>
  );
}

function StepsInline2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Steps inline">
      <StepsInlineLabelBase2 />
    </div>
  );
}

function LabelContainer3() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pl-[2px] pr-[6px] relative shrink-0" data-name="Label container">
      <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-right tracking-[0.16px] whitespace-nowrap">
        <p className="mb-0">{`Streamlined `}</p>
        <p>Campaign Management</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[83px]">
      <LabelContainer3 />
    </div>
  );
}

function Circle2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_278)" id="Circle">
          <path d={svgPaths.p25b18600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_278">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RightContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center pt-[4px] relative shrink-0" data-name="Right container">
      <Circle2 />
      <div className="bg-[#5e5e5e] h-[80px] rounded-[2px] shrink-0 w-[2px]" data-name="Right Connector" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[89px]">
      <Frame10 />
      <RightContainer3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Frame9 />
    </div>
  );
}

function StepsInlineLabelBase3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pr-[6px] relative shrink-0" data-name="_Steps inline label base">
      <Container3 />
    </div>
  );
}

function StepsInline3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Steps inline">
      <StepsInlineLabelBase3 />
    </div>
  );
}

function LabelContainer4() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pl-[2px] pr-[6px] relative shrink-0" data-name="Label container">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-right tracking-[0.16px]">Yield Optimization</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[83px]">
      <LabelContainer4 />
    </div>
  );
}

function Circle3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_278)" id="Circle">
          <path d={svgPaths.p25b18600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_278">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RightContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center pt-[4px] relative shrink-0" data-name="Right container">
      <Circle3 />
      <div className="bg-[#5e5e5e] h-[80px] rounded-[2px] shrink-0 w-[2px]" data-name="Right Connector" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[89px]">
      <Frame12 />
      <RightContainer4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Frame11 />
    </div>
  );
}

function StepsInlineLabelBase4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pr-[6px] relative shrink-0" data-name="_Steps inline label base">
      <Container4 />
    </div>
  );
}

function StepsInline4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Steps inline">
      <StepsInlineLabelBase4 />
    </div>
  );
}

function LabelContainer5() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pl-[2px] pr-[6px] relative shrink-0" data-name="Label container">
      <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-right tracking-[0.16px] whitespace-nowrap">
        <p className="mb-0">{`Audience intelligence `}</p>
        <p className="mb-0">and forecasting</p>
        <p>Programmatic</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[83px]">
      <LabelContainer5 />
    </div>
  );
}

function Circle4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_278)" id="Circle">
          <path d={svgPaths.p25b18600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_278">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RightContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center pt-[4px] relative shrink-0" data-name="Right container">
      <Circle4 />
      <div className="bg-[#5e5e5e] h-[80px] rounded-[2px] shrink-0 w-[2px]" data-name="Right Connector" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[89px]">
      <Frame14 />
      <RightContainer5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Frame13 />
    </div>
  );
}

function StepsInlineLabelBase5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pr-[6px] relative shrink-0" data-name="_Steps inline label base">
      <Container5 />
    </div>
  );
}

function StepsInline5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Steps inline">
      <StepsInlineLabelBase5 />
    </div>
  );
}

function LabelContainer6() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pl-[2px] pr-[6px] relative shrink-0" data-name="Label container">
      <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-right tracking-[0.16px] whitespace-nowrap">
        <p className="mb-0">{`Premium `}</p>
        <p>Programmatic</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[83px]">
      <LabelContainer6 />
    </div>
  );
}

function Circle5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_278)" id="Circle">
          <path d={svgPaths.p25b18600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_278">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RightContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center pt-[4px] relative shrink-0" data-name="Right container">
      <Circle5 />
      <div className="bg-[#5e5e5e] h-[80px] rounded-[2px] shrink-0 w-[2px]" data-name="Right Connector" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[89px]">
      <Frame16 />
      <RightContainer6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Frame15 />
    </div>
  );
}

function StepsInlineLabelBase6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pr-[6px] relative shrink-0" data-name="_Steps inline label base">
      <Container6 />
    </div>
  );
}

function StepsInline6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Steps inline">
      <StepsInlineLabelBase6 />
    </div>
  );
}

function LabelContainer7() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pl-[2px] pr-[6px] relative shrink-0" data-name="Label container">
      <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-right tracking-[0.16px] whitespace-nowrap">
        <p className="mb-0">Flexible AD delivery</p>
        <p>and forecasting</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[83px]">
      <LabelContainer7 />
    </div>
  );
}

function Circle6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_278)" id="Circle">
          <path d={svgPaths.p25b18600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_278">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RightContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center pt-[4px] relative shrink-0" data-name="Right container">
      <Circle6 />
      <div className="bg-[#5e5e5e] h-[80px] rounded-[2px] shrink-0 w-[2px]" data-name="Right Connector" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[89px]">
      <Frame18 />
      <RightContainer7 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Frame17 />
    </div>
  );
}

function StepsInlineLabelBase7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pr-[6px] relative shrink-0" data-name="_Steps inline label base">
      <Container7 />
    </div>
  );
}

function StepsInline7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Steps inline">
      <StepsInlineLabelBase7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <StepsInline />
      <StepsInline1 />
      <StepsInline2 />
      <StepsInline3 />
      <StepsInline4 />
      <StepsInline5 />
      <StepsInline6 />
      <StepsInline7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-end left-[1761px] top-[64px] w-[95px]">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[1761px] top-[64px]">
      <Frame3 />
    </div>
  );
}

export default function SynamediaIris() {
  return (
    <div className="bg-white relative size-full" data-name="Synamedia Iris">
      <div className="absolute bg-black h-[1080px] left-0 top-0 w-[1920px]" />
      <Background />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[858px] left-[calc(50%-39.5px)] top-[calc(50%+121px)] w-[1537px]" data-name="Gemini_Generated_Image_2j17tp2j17tp2j17 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage2J17Tp2J17Tp2J171} />
      </div>
      <InformationContainer />
      <Group />
    </div>
  );
}