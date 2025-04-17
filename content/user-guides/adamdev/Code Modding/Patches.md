Patching is one of those things in the code modder tool box that become super useful. The main purpose of patches are to change the way that the game's code is ran, by inserting our own code into the function's instructions.

There are two types of method patches: **prefixes** and **postfixes**.

## Postfixes
**Postfixes** are patches that run ***after*** the original method does. These are super neat because we can listen for game events this way. For example, let's say that an enemy dies and we want to know exactly when that function gets called so we can do stuff. We can make a postfix like so to call an event.

```cs
[HarmonyPatch(typeof(Enemy))]
[HarmonyPatch(nameof(Enemy.OnDeath))]
internal static class Enemy_OnDeath_Postfix
{
	internal static void Postfix()
	{
		OnEnemyDeath?.Invoke();
	}
}
```

Now that we know what a postfix is, let's get into something that is similar to postfixes, but offer more flexibility.
## Prefixes