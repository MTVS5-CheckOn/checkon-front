---
name: tailwind-styling
description: Enforces Tailwind CSS class ordering and cn() usage for checkon-front. Use when writing or editing React/TSX components, className props, conditional styling, or Tailwind CSS in this project.
---

# Tailwind CSS 클래스 작성 규칙 (Styling Conventions)

가독성 및 유지보수성을 높이기 위해 Tailwind CSS 클래스 작성 시 **`cn` (clsx + tailwind-merge) 함수** 사용을 필수 원칙으로 합니다. 모든 클래스는 아래 지정된 **6단계 위계 질서 그룹 순서**에 따라 정렬하여 작성합니다.

## 1. 기본 원칙

- 조건부 스타일링 및 클래스 병합 시 반드시 `cn()` 유틸리티 함수를 사용합니다.
- 클래스 목록은 속성 간 충돌을 방지하고 코드 가독성을 확보하기 위해 **지정된 위계(Layer) 순서**대로 그룹화하여 배치합니다.
- 한 문자열 안에 서로 다른 레이어를 섞지 말고, **레이어가 바뀌면 다음 `cn()` 인자에서 분리**합니다.
- `cn` import 경로: `@/ui/utils/tailwind/cn`
- 스타일은 별도 변수로 분리하여 참조하지 않고 className에 인라인으로 작성합니다.
- inline-flex와 같은 'inline-*' 계통 CSS는 flex로 변환합니다.
- self-stretch는 w-full로 변환합니다.
- tracking-tight는 제거합니다.

### 적용 제외 (조건부 스타일링)

**삼항 연산자** 또는 **`&&` 조건부 스타일링**이 적용된 **해당 라인**은 개발자가 의도적으로 배치한 코드입니다. 위계 질서 규칙 적용 대상에서 **제외**하며, **어떤 형태로도 조작하지 않습니다.** 나머지 정적 클래스 라인에만 이 SKILL을 적용합니다.

적용 제외 예시:

```tsx
className={cn(
  // 1. Layout
  "flex items-center gap-2 p-2",
  // 2. Typography
  "ods__typo__label-large font-medium",
  // 3. Color
  "text-ods__base-500",
  // 4. Shadow & Border
  "rounded-lg",
  // 5. Interaction
  "ods__decorate__hover hover:bg-ods__base-200",
  // ↓ 개발자 의도 배치 — 위치·내용·형태 변경 금지
  isActive && "text-ods__blue-600 bg-ods__blue-20",
)}
```

- **조작 금지 (해당 라인)**: `isActive && "..."`, `condition ? "..." : "..."` 등 조건 연산자가 붙은 라인
  - 위치 이동, 레이어 분리, 삼항 연산자 변환, 클래스 순서 변경, 주석 추가·수정 등 **일체 금지**
- **적용 대상**: Layout ~ Interaction 등 **정적 클래스 라인** — 레이어 분리·주석·순서 정렬 가능

---

## 2. Tailwind Layering 위계 질서 (Priority Order)

**1) Layout**

- 설명: 배치, 디스플레이, 박스 모델, 크기, 위치
- 예시: `flex`, `grid`, `absolute`, `w-full`, `p-4`, `m-2`, `gap-4`

**2) Typography**

- 설명: 폰트 스타일, 글자 크기, 정렬, 행간, 자간
- 예시: `text-sm`, `font-bold`, `tracking-tight`, `text-center`, **`ods__typo__*`**

**3) Color**

- 설명: 배경색, 글자색, 투명도
- 예시: `bg-white`, `text-gray-900`, `text-ods__base-600`, `bg-opacity-50`

**4) Shadow & Border**

- 설명: 테두리 두께/색상, 라운딩, 그림자 효과
- 예시: `rounded-lg`, `border`, `border-gray-200`, `shadow-md`

**5) Interaction**

- 설명: 마우스 호버, 포커스, 액티브, 트랜지션, 커서, 애니메이션
- 예시: `hover:bg-gray-100`, `focus:outline-none`, `transition-colors`, `cursor-pointer`, `animate-spin`, `ods__animate__*`, `ods__decorate__*`

**6) Utility**

- 설명: 기타 유틸리티, 오버플로우
- 예시: `overflow-hidden`, `pointer-events-none`

---

## 3. 코드 적용 예시

### ❌ 올바르지 않은 예시 (클래스 무작위 배열)

```tsx
// 속성 순서가 섞여 있어 읽기 어렵고 충돌 관리가 힘듦
<button className="flex items-center rounded-md bg-blue-500 p-3 font-bold text-white shadow-sm hover:bg-blue-600">
  Submit
</button>
```

### ✅ 올바른 예시 (cn 함수 사용 + 위계 질서 준수)

```tsx
import { cn } from "@/ui/utils/tailwind/cn";

// 1.Layout -> 2.Typography -> 3.Color -> 4.Shadow/Border -> 5.Interaction -> 6.Utility
<button
  className={cn(
    "flex w-full items-center justify-center p-3", // 1. Layout
    "text-sm font-semibold tracking-wide", // 2. Typography
    "bg-blue-500 text-white", // 3. Color
    "rounded-md border border-transparent shadow", // 4. Shadow & Border
    "transition hover:bg-blue-600 focus:ring-2", // 5. Interaction
    "overflow-hidden", // 6. Utility
  )}
>
  Submit
</button>;
```

## 적용 체크리스트

코드 작성·수정 시 아래를 확인합니다:

- [ ] 조건부 스타일링 **해당 라인**은 개발자 의도 배치이므로 **조작 금지** (정적 라인만 SKILL 적용)
- [ ] `className` 문자열 병합에 `cn()` 사용 (className 개수가 적더라도 필수 적용)
- [ ] 6단계 위계 순서 준수 (Layout → Typography → Color → Shadow/Border → Interaction → Utility)
- [ ] 각 그룹별 주석 작성 (위계 질서 구분이 3개 이상일 때 가독성을 위한 주석)
- [ ] 프로젝트 커스텀 클래스(`ods__*`)는 해당 레이어에 배치
