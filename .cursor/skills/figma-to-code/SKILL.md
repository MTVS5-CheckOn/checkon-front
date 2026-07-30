---
name: figma-to-code
description: Cleans up Figma-exported Tailwind CSS classes for checkon-front. Use when converting Figma designs to code, refactoring Figma-generated className strings, or normalizing Figma-to-code output.
---

# Figma to Code 클래스 정리 규칙

Figma 내보내기 또는 Figma 기반 코드 생성 결과물의 Tailwind 클래스를 프로젝트 관례에 맞게 정리합니다.

## 변환 규칙

- inline-flex와 같은 'inline-*' 계통 CSS는 flex로 변환합니다.
- self-stretch는 w-full로 변환합니다.
- tracking-tight는 제거합니다.

## 적용 체크리스트

- [ ] `inline-*` 계열 클래스를 `flex`로 변환했는가
- [ ] `self-stretch`를 `w-full`로 변환했는가
- [ ] `tracking-tight`를 제거했는가
