---
name: ios-performance
description: Use when app feels slow, memory grows, battery drains, or diagnosing ANY performance issue. Covers memory leaks, profiling, Instruments workflows, retain cycles, performance optimization.
user-invocable: false
---

# iOS Performance Router

**You MUST use this skill for ANY performance issue including memory leaks, slow execution, battery drain, or profiling.**

## When to Use

Use this router when:
- App feels slow or laggy
- Memory usage grows over time
- Battery drains quickly
- Device gets hot during use
- High energy usage in Battery Settings
- Diagnosing performance with Instruments
- Memory leaks or retain cycles
- App crashes with memory warnings

## Routing Logic

### Memory Issues

**Memory leaks (Swift)** → `/skill memory-debugging`
- Systematic leak diagnosis
- 5 common leak patterns
- Instruments workflows
- deinit not called

**Memory leaks (Objective-C blocks)** → `/skill objc-block-retain-cycles`
- Block retain cycles
- Weak-strong pattern
- Network callback leaks

### Performance Profiling

**Performance profiling (GUI)** → `/skill performance-profiling`
- Time Profiler (CPU)
- Allocations (memory growth)
- Core Data profiling (N+1 queries)
- Decision trees for tool selection

**Automated profiling (CLI)** → `/skill xctrace-ref`
- Headless xctrace profiling
- CI/CD integration patterns
- Command-line trace recording
- Programmatic trace analysis

**Run automated profile** → Use `performance-profiler` agent or `/hp:profile`
- Records trace via xctrace
- Exports and analyzes data
- Reports findings with severity

### Hang/Freeze Issues

**App hangs or freezes** → `/skill hang-diagnostics`
- UI unresponsive for >1 second
- Main thread blocked (busy or waiting)
- Decision tree: busy vs blocked diagnosis
- Time Profiler vs System Trace selection
- 8 common hang patterns with fixes
- Watchdog terminations

### Energy Issues

**Battery drain, high energy** → `/skill energy`
- Power Profiler workflow
- Subsystem diagnosis (CPU/GPU/Network/Location/Display)
- Anti-pattern fixes
- Background execution optimization

**Symptom-based diagnosis** → `/skill energy-diag`
- "App at top of Battery Settings"
- "Device gets hot"
- "Background battery drain"
- Time-cost analysis for each path

**API reference with code** → `/skill energy-ref`
- Complete WWDC code examples
- Timer, network, location efficiency
- BGContinuedProcessingTask (iOS 26)
- MetricKit setup

### MetricKit Integration

**MetricKit API reference** → `/skill metrickit-ref`
- MXMetricPayload parsing
- MXDiagnosticPayload (crashes, hangs)
- Field performance data collection
- Integration with crash reporting

## Decision Tree

```
User reports performance issue
  ├─ Memory?
  │  ├─ Swift code? → memory-debugging
  │  └─ Objective-C blocks? → objc-block-retain-cycles
  │
  ├─ Hang/Freeze (UI unresponsive >1 second)?
  │  └─ YES → hang-diagnostics
  │
  ├─ Energy/Battery?
  │  ├─ Know the symptom? → energy-diag
  │  ├─ Need API reference? → energy-ref
  │  └─ General battery drain? → energy
  │
  ├─ MetricKit setup/parsing?
  │  └─ YES → metrickit-ref
  │
  ├─ Want to profile?
  │  ├─ GUI workflow? → performance-profiling
  │  ├─ CLI/automation? → xctrace-ref
  │  ├─ Run profile now? → performance-profiler agent
  │  └─ Unsure → performance-profiling
  │
  └─ General slow/lag? → performance-profiling
```

## Critical Patterns

**Memory Debugging** (memory-debugging):
- 6 leak patterns: timers, observers, closures, delegates, view callbacks, PhotoKit
- Instruments workflows
- Leak vs caching distinction

**Performance Profiling** (performance-profiling):
- Time Profiler for CPU bottlenecks
- Allocations for memory growth
- Core Data SQL logging for N+1 queries
- Self Time vs Total Time

**Energy Optimization** (energy):
- Power Profiler subsystem diagnosis
- 8 anti-patterns: timers, polling, location, animations, background, network, GPU, disk
- Audit checklists by subsystem
- Pressure scenarios for deadline resistance

## Example Invocations

User: "My app's memory usage keeps growing"
→ Invoke: `/skill memory-debugging`

User: "I have a memory leak but deinit isn't being called"
→ Invoke: `/skill memory-debugging`

User: "My app feels slow, where do I start?"
→ Invoke: `/skill performance-profiling`

User: "My Objective-C block callback is leaking"
→ Invoke: `/skill objc-block-retain-cycles`

User: "My app drains battery quickly"
→ Invoke: `/skill energy`

User: "Users say the device gets hot when using my app"
→ Invoke: `/skill energy-diag`

User: "What's the best way to implement location tracking efficiently?"
→ Invoke: `/skill energy-ref`

User: "Profile my app's CPU usage"
→ Use: `performance-profiler` agent (or `/hp:profile`)

User: "How do I run xctrace from the command line?"
→ Invoke: `/skill xctrace-ref`

User: "I need headless profiling for CI/CD"
→ Invoke: `/skill xctrace-ref`

User: "My app hangs sometimes"
→ Invoke: `/skill hang-diagnostics`

User: "The UI freezes and becomes unresponsive"
→ Invoke: `/skill hang-diagnostics`

User: "Main thread is blocked, how do I diagnose?"
→ Invoke: `/skill hang-diagnostics`

User: "How do I set up MetricKit?"
→ Invoke: `/skill metrickit-ref`

User: "How do I parse MXMetricPayload?"
→ Invoke: `/skill metrickit-ref`
