## Main
``Main.cs`` is where all the magic will happen. In most cases this is where your mod code will run. In a future article, I'll explain a situation where you don't actually need ``Main.cs``. For now, we'll focus on making one!

```cs
using MelonLoader;

public class MyMod : MelonMod
{
	public static MelonLogger.Instance Logger;

	// Ran when our mod is loaded into the game.
	// Useful for initializing our objects/data.
	public override void OnMelonInitialized()
	{
		Logger = new MelonLogger.Instance(name: "MyMod");
		
		Logger.Msg("Hello from MyMod!")
	}

	// Ran when the game is shut down and our mod is unloaded.
	// Put any cleanup code in here!
	public override void OnMelonUninitialized()
	{
		Logger.Msg("Shutting down MyMod!");
		Logger = null;
	}
}
```
## Assembly Info
In order for MelonLoader to load our mod, we have to supply the mod with metadata.

Inside of ``Properties/AssemblyInfo.cs``, it should look like so:
```cs
[assembly: AssemblyTitle(MyMod.BuildInfo.Title)]
[assembly: AssemblyCompany(MyMod.BuildInfo.Author)]
[assembly: MelonInfo(
                      typeof(MyMod.Main), 
                      MyMod.BuildInfo.Name,
                      MyMod.BuildInfo.Version,
                      MyMod.BuildInfo.Author,
                      MyMod.BuildInfo.DownloadLink)]

// This is important!
[assembly: MelonGame("Stress Level Zero", "BONELAB")]
```
