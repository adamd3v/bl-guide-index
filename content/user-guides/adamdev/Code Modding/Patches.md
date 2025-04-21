Patching is one of those things in the code modder tool box that become super useful. The main purpose of patches are to change the way that the game's code is ran by inserting our own code into the function's instructions.

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
**Prefixes** are patches that run **before** the original method executes. The neat thing about prefixes is that they return a ``bool``. If you were to return ``true``, the method executes like normal. The opposite is true when ``false`` is returned, where it won't run the original function.

```cs
[HarmonyPatch(typeof(Enemy))]
[HarmonyPatch(nameof(Enemy.OnDeath))]
internal static class Enemy_OnDeath_Prefix
{
	internal static bool m_runDeath = false;

	internal static bool Prefix()
	{
		if (m_runDeath)
		{
			// m_runDeath is true here, which means that we can -
			// execute our code AND the function will call as normal.
			return true;
		}
		else
		{
			// m_runDeath is false here.
			// If we add our own code, ours will run and the original will not.
			return false;
		}
	}
}
```

Postfixes are useful for when you want to change the behavior of game components, like adding extra logic for handling targeting different enemy groups, or changing a value before it gets sent to the original function.
## Patch Parameters
Patch parameters are yet another sweetener of Harmony. They allow you to get things like the instances of objects from patched functions, which is what this section will briefly cover.
### Instances
``__instance`` is a custom parameter you can insert in the beginning of the parameter list, which allows you to get the instance of the object that called the patched function.

For example, in Hitmarkers I patch the ``Awake`` method of the ``Projectile`` class so I can add an event for when it collides with something.

```cs
[HarmonyLib.HarmonyPatch(typeof(Projectile))]
[HarmonyLib.HarmonyPatch(nameof(Projectile.Awake))]
public static class ProjectilePatch
{
	public static void Postfix(Projectile __instance)
    {
	    Action<Collider, Vector3, Vector3> onCollision = OnCollision;
        __instance.onCollision.AddListener(onCollision);
    }
        
	internal static void OnCollision(Collider collider, Vector3 world, Vector3 normal)
	{
		// Collision code here:
	}
}
```