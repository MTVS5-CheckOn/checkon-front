---
name: tailwind-styling
description: Enforces Tailwind CSS class ordering and cn() usage for checkon-front. Use when writing or editing React/TSX components, className props, conditional styling, or Tailwind CSS in this project.
---

# Tailwind CSS 클래스 작성 규칙 (Styling Conventions)

가독성 및 유지보수성을 높이기 위해 Tailwind CSS 클래스 작성 시 **`cn` (clsx + tailwind-merge) 함수** 사용을 필수 원칙으로 합니다. 모든 클래스는 아래 지정된 **6단계 위계 질서 그룹 순서**에 따라 정렬하여 작성합니다.

## 1. 기본 원칙

- 조건부 스타일링 및 클래스 병합 시 반드시 `cn()` 유틸리티 함수를 사용합니다.
- 클래스 목록은 속성 간 충돌을 방지하고 코드 가독성을 확보하기 위해 **지정된 위계(Layer) 순서**대로 그룹화하여 배치합니다.
- `cn` import 경로: `@/ui/utils/tailwind/cn`

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

- [ ] `className` 문자열 병합에 `cn()` 사용
- [ ] 6단계 위계 순서 준수 (Layout → Typography → Color → Shadow/Border → Interaction → Utility)
- [ ] 각 그룹별 주석으로 레이어 구분 (복잡한 className일 때)
- [ ] 프로젝트 커스텀 클래스(`ods__*`)는 해당 레이어에 배치
